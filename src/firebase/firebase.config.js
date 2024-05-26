// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVP4HRj7tikP_rMZuPRfRMH9D8eu1shgQ",
  authDomain: "super-shop-fccee.firebaseapp.com",
  projectId: "super-shop-fccee",
  storageBucket: "super-shop-fccee.appspot.com",
  messagingSenderId: "465115661661",
  appId: "1:465115661661:web:12bf711cfc139fc742d4b4"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)


