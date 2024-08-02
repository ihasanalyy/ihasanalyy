// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRNCgmfm6x4tH_UiLolp-UzQbrT7W5MXg",
  authDomain: "practice-firebase-dac13.firebaseapp.com",
  projectId: "practice-firebase-dac13",
  storageBucket: "practice-firebase-dac13.appspot.com",
  messagingSenderId: "332421488725",
  appId: "1:332421488725:web:2024b333ba406c5edff4dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  db
  
} 