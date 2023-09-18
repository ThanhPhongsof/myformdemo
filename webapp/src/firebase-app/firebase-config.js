// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAGp3lDPIc3_g2asJNuOXw4kGm7FRRjFtA",
  authDomain: "myform-demo.firebaseapp.com",
  projectId: "myform-demo",
  storageBucket: "myform-demo.appspot.com",
  messagingSenderId: "33297727093",
  appId: "1:33297727093:web:88e91955cd0cd9590e823c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
