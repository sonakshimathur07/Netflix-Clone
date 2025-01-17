// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { ApikeyFirebase } from "./constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyATD-KD02Aq5_qzVMvtMl-YhLlih-_kds8',
  authDomain: "netflix-f8f8b.firebaseapp.com",
  projectId: "netflix-f8f8b",
  storageBucket: "netflix-f8f8b.firebasestorage.app",
  messagingSenderId: "568303703164",
  appId: "1:568303703164:web:dae7c8ec9d1508016725f9",
  measurementId: "G-GS21XHYQPL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();