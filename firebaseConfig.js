// lib/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdq0DaparSvUek1uBXigIBxJis_qus5sk",
  authDomain: "idealmart-19f8e.firebaseapp.com",
  projectId: "idealmart-19f8e",
  storageBucket: "idealmart-19f8e.appspot.com",
  messagingSenderId: "707183843974",
  appId: "1:707183843974:web:8476f811b58fee69068f07",
  measurementId: "G-JWS6X0F00Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app;
