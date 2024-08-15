// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvMz5Gq38ch8qxUXOinPfWhYxA3TUNjFE",
  authDomain: "ai-travel-planner-2226f.firebaseapp.com",
  projectId: "ai-travel-planner-2226f",
  storageBucket: "ai-travel-planner-2226f.appspot.com",
  messagingSenderId: "1759078089",
  appId: "1:1759078089:web:c1b8a2925ad6b77f5a4f18",
  measurementId: "G-MQB51X9W1D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)