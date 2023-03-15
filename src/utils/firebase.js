// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "*********************",
  authDomain: "projectid.firebaseapp.com",
  projectId: "projectid",
  databaseURL: "https://projectid.firebaseio.com",
  storageBucket: "projectid.appspot.com",
  messagingSenderId: "*********************",
  appId: "*********************",
  measurementId: "********************",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestoredb = getFirestore(app);
export default app;
