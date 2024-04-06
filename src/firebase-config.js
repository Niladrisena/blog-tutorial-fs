import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider  } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClSjN8nQAIBv4Z91J9hMutwqyzSlxibrQ",
  authDomain: "blogproject-b5956.firebaseapp.com",
  projectId: "blogproject-b5956",
  storageBucket: "blogproject-b5956.appspot.com",
  messagingSenderId: "340532330558",
  appId: "1:340532330558:web:7f0e2176187a101368d16f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();