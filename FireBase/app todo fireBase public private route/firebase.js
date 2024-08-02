import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {getFirestore, collection,addDoc,getDocs,doc, deleteDoc,updateDoc  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2q_XOyJoEQivg79AsJyhvr4F09mn9bhc",
    authDomain: "newfirbase-c48bb.firebaseapp.com",
    projectId: "newfirbase-c48bb",
    storageBucket: "newfirbase-c48bb.appspot.com",
    messagingSenderId: "772775616129",
    appId: "1:772775616129:web:6ec6a3dbf6d02fa454b780"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {
    app,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    db,
    collection, 
    addDoc,
    getDocs,
    doc, 
    deleteDoc,
    updateDoc 
}