import { initializeApp } from "firebase/app";
import { collection, query, where,getFirestore,getDocs,getDoc,doc,setDoc } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBYyi_rd_5261joRgsguWBXjJJjf4dws-c",
    authDomain: "unlockpassword.firebaseapp.com",
    projectId: "unlockpassword",
    storageBucket: "unlockpassword.appspot.com",
    messagingSenderId: "891549287170",
    appId: "1:891549287170:web:69aed338fc4f5ba7bd781b",
    measurementId: "G-E3HJ6B7HF1"
});

const db = getFirestore();
export {collection, query, where,db,getDocs,getDoc,doc,setDoc}
