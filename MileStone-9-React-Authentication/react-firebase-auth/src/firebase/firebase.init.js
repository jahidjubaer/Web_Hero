// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgeBQHz4xrKJVMblimO_wa6LuLf6yqYBE",
  authDomain: "raect-firebase-auth.firebaseapp.com",
  projectId: "raect-firebase-auth",
  storageBucket: "raect-firebase-auth.firebasestorage.app",
  messagingSenderId: "508079991419",
  appId: "1:508079991419:web:c1d587790a4b726ad7d0de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
