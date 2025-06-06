import * as functions from "firebase-functions";
import { CallableRequest } from "firebase-functions/v2/https";
import { getFirestore } from "firebase-admin/firestore";

/**
 * Scans a website and returns basic theme information
 */
export const scanWebsiteTheme = functions.https.onCall(
  async (request: CallableRequest<{ url: string }>) => {
    const { data, auth } = request;

    if (!data?.url) {
      throw new functions.https.HttpsError("invalid-argument", "URL is required");
    }

    if (!auth) {
      throw new functions.https.HttpsError("unauthenticated", "Authentication required");
    }

    // Return mock theme data for now
    return {
      success: true,
      url: data.url,
      theme: {
        primaryColor: "#4F46E5",
        backgroundColor: "#111827",
        textColor: "#F9FAFB",
        fontFamily: "Inter, sans-serif",
      },
    };
  }
);

/**
 * Fetches all theme scans for the authenticated user
 */
export const getUserThemeScans = functions.https.onCall(
  async (request: CallableRequest<void>) => {
    const { auth } = request;

    if (!auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "Authentication required"
      );
    }

    const db = getFirestore();
    const userId = auth.uid;

    try {
      // Query the themeScans collection for documents where userId matches
      const snapshot = await db
        .collection("themeScans")
        .where("userId", "==", userId)
        .orderBy("createdAt", "desc")
        .get();

      // Map the documents to an array of theme scans
      const themeScans = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return {
        success: true,
        data: themeScans,
      };
    } catch (error) {
      console.error("Error fetching theme scans:", error);
      throw new functions.https.HttpsError(
        "internal",
        "Failed to fetch theme scans"
      );
    }
  }
);

// Export functions
export const themeCraftFunctions = {
  scanWebsiteTheme,
  getUserThemeScans,
};
