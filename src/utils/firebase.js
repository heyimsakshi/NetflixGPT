// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4gFQzinLPkuQ1pOj2nPOP61UmIB1Gorw",
  authDomain: "netflix-backend-7bf61.firebaseapp.com",
  projectId: "netflix-backend-7bf61",
  storageBucket: "netflix-backend-7bf61.appspot.com",
  messagingSenderId: "384690177653",
  appId: "1:384690177653:web:9d81986ea27e2056531a3c",
  measurementId: "G-7LRWJ98PE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();