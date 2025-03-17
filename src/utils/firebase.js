// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD3BU29ZYPepohffQhXwCoVPj-vscOHKU",
  authDomain: "netflixgpt-db418.firebaseapp.com",
  projectId: "netflixgpt-db418",
  storageBucket: "netflixgpt-db418.firebasestorage.app",
  messagingSenderId: "965193852706",
  appId: "1:965193852706:web:e1c30d978a6459ff20677b",
  measurementId: "G-75TXK2TPD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);