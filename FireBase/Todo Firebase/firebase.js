
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc ,doc,updateDoc,setDoc   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWtPLDTZq-IXTxxIdZv0kqjz1tRvvwXSI",
  authDomain: "mynew-636d1.firebaseapp.com",
  projectId: "mynew-636d1",
  storageBucket: "mynew-636d1.appspot.com",
  messagingSenderId: "129985049043",
  appId: "1:129985049043:web:bfb2a550984edbfa75ff26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()

export {
  db,
  app,
  collection,
  addDoc,
  getDocs,
  deleteDoc ,
  doc,
  updateDoc,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword ,
  setDoc 
}