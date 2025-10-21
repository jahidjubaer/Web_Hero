// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAag35czRDwsK6T77d7pHiX_m3ua7CuSM",
  authDomain: "email-pass-auth-be4fe.firebaseapp.com",
  projectId: "email-pass-auth-be4fe",
  storageBucket: "email-pass-auth-be4fe.firebasestorage.app",
  messagingSenderId: "267115491421",
  appId: "1:267115491421:web:377be36169d673af9b5db4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
