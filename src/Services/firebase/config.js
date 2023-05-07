// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBBC99wbUXLM6GOY3XoSzpoPDiTRU-JAzQ",
  authDomain: "ian-fortunatti-photography.firebaseapp.com",
  projectId: "ian-fortunatti-photography",
  storageBucket: "ian-fortunatti-photography.appspot.com",
  messagingSenderId: "79351574287",
  appId: "1:79351574287:web:dec5c33d1ccd119ffb587a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
