// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
initializeApp({
  apiKey: "AIzaSyBdbBr2sZGVREEEU-RJb_4s-pVIECpWtPs",
  authDomain: "educapp-b2759.firebaseapp.com",
  projectId: "educapp-b2759",
  storageBucket: "educapp-b2759.appspot.com",
  messagingSenderId: "264850967947",
  appId: "1:264850967947:web:d04f599680d10b78d1738e"
});

export const auth = getAuth();
export const db = getFirestore();
