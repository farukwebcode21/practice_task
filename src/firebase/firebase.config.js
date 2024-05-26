// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnGXAnUU51JklIh-cYNR-MllerrHHz_qc",
  authDomain: "practice-app-d3cb4.firebaseapp.com",
  projectId: "practice-app-d3cb4",
  storageBucket: "practice-app-d3cb4.appspot.com",
  messagingSenderId: "266109252069",
  appId: "1:266109252069:web:0a39d4057da9aa141d3f0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
