// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD4aBR1DAHdpCMN7w8ahpwCj-M8wS6qwg",
  authDomain: "usocial19.firebaseapp.com",
  projectId: "usocial19",
  databaseURL: "https://usocial19-default-rtdb.firebaseio.com",
  storageBucket: "usocial19.appspot.com",
  messagingSenderId: "241581204168",
  appId: "1:241581204168:web:a114b413f5103f7a78fbfd",
  measurementId: "G-P4Z57L5Q3T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestoredb = getFirestore(app);
export default app;
