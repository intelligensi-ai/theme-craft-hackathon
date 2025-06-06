import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// Import the functions you need from the SDKs you need


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK3KPMZGa-wIxLp2jvypIn1kb0Dpjkl5I",
  authDomain: "intelligensi-ai-v2.firebaseapp.com",
  projectId: "intelligensi-ai-v2",
  storageBucket: "intelligensi-ai-v2.firebasestorage.app",
  messagingSenderId: "254810072342",
  appId: "1:254810072342:web:97635b51138ab90a8f9c37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase services
const auth = getAuth(app);
const functions = getFunctions(app, "us-central1"); // Specify your region

// Connect to emulators in development if they are running
const EMULATOR_HOST = 'localhost';
const AUTH_EMULATOR_PORT = 9099;
const FUNCTIONS_EMULATOR_PORT = 5001;

const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

if (isLocalhost) {
  console.log("[Firebase Init] Running on localhost, checking for emulators...");
  
  // Only try to connect to emulators if we're in development mode
  if (process.env.NODE_ENV === 'development') {
    // Test if auth emulator is running
    fetch(`http://${EMULATOR_HOST}:${AUTH_EMULATOR_PORT}/emulator/openapi.json`)
      .then(() => {
        // Auth emulator is running
        connectAuthEmulator(auth, `http://${EMULATOR_HOST}:${AUTH_EMULATOR_PORT}`);
        console.log("[Firebase Init] Connected to Auth emulator");
      })
      .catch((error) => {
        console.warn("[Firebase Init] Auth emulator not detected, using production auth service");
      });

    // Test if functions emulator is running
    fetch(`http://${EMULATOR_HOST}:${FUNCTIONS_EMULATOR_PORT}/__/functions.yaml`)
      .then(() => {
        // Functions emulator is running
        connectFunctionsEmulator(functions, EMULATOR_HOST, FUNCTIONS_EMULATOR_PORT);
        console.log("[Firebase Init] Connected to Functions emulator");
      })
      .catch((error) => {
        console.warn("[Firebase Init] Functions emulator not detected, using production functions");
      });
  } else {
    console.log("[Firebase Init] Running in production mode, using production services");
  }
} else {
  console.log("[Firebase Init] Running in production environment");
}

export { auth, functions };

