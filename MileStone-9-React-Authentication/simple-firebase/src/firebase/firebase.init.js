// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBva40ctqYKlDwJtvOkT5Vm52w3TaSPUGY",
  authDomain: "simple-firebase-auth-95fbc.firebaseapp.com",
  projectId: "simple-firebase-auth-95fbc",
  storageBucket: "simple-firebase-auth-95fbc.firebasestorage.app",
  messagingSenderId: "844421192915",
  appId: "1:844421192915:web:8269f3909c9870cf004826",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

// export for further use ;
export const auth = getAuth(app);
