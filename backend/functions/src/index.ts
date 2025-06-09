import * as dotenv from "dotenv";
dotenv.config();

import { setGlobalOptions } from "firebase-functions/v2";
import { onRequest } from "firebase-functions/v2/https";
import express, { json as expressJson } from "express";
import cors from "cors";

// Import routes
import { updateHomepage } from "./routes/openaiRoutes";
import drupal7Router from "./migrations/drupal7Migrations";
import authRouter from "./routes/authRoutes";

// Set global options for all functions
setGlobalOptions({
  region: "us-central1",
  memory: "1GiB",
  timeoutSeconds: 60,
  minInstances: 0,
  maxInstances: 10,
  concurrency: 80,
  cpu: 1,
});

// Drupal 7 Express app
const drupal7App = express();
drupal7App.use(express.json());
drupal7App.use(cors({ origin: true }));
drupal7App.use("/", drupal7Router);

// Add health check endpoint for Cloud Run
drupal7App.get("/healthz", (req, res) => {
  res.status(200).send("ok");
});

// Export the drupal7 function with proper configuration
export const drupal7 = onRequest({
  region: "us-central1",
  memory: "1GiB",
  timeoutSeconds: 60,
  minInstances: 0,
  maxInstances: 10,
  concurrency: 80,
  cpu: 1,
}, drupal7App);

// Auth Express app
const authApp = express();
authApp.use(cors({ origin: true }));
authApp.use(expressJson());
authApp.use("/", authRouter);

export const auth = onRequest(
  {
    region: "us-central1",
    memory: "1GiB",
    timeoutSeconds: 60,
    minInstances: 0,
    maxInstances: 10,
  },
  authApp
);

// Export OpenAI functions
export { updateHomepage };

