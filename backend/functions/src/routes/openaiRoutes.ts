import { onRequest } from "firebase-functions/v2/https";
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Standalone Firebase Function with built-in CORS
export const updateHomepage = onRequest(
  {
    cors: true, // Firebase handles CORS automatically
  },
  async (req, res) => {
    try {
      // Handle preflight requests for CORS
      if (req.method === "OPTIONS") {
        res.status(204).send();
        return;
      }

      console.log("Received request:", req.method, req.path, req.body);

      const { text } = req.body || {};

      if (!text) {
        res.status(400).json({ error: "Text is required" });
        return;
      }

      // Get chat messages from the conversation history if available
      const chatHistory = req.body.chatHistory || [];
      
      // Prepare messages for the chat completion
      const messages = [
        { 
          role: "system" as const, 
          content: "You are a helpful AI assistant. Provide clear, concise, and helpful responses." 
        },
        ...chatHistory,
        { role: "user" as const, content: text }
      ];

      // Call OpenAI's chat completion API
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages,
        temperature: 0.7,
      });

      const aiResponse = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

      res.status(200).json({
        message: aiResponse,
      });
    } catch (error) {
      console.error("Error in updateHomepage:", error);
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      res.status(500).json({ 
        error: "Failed to process your request",
        details: errorMessage 
      });
    }
  }
);
