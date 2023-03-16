// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAYPH1lwPEo46LDloQ6v2vyepAmvIOvfjw",
  authDomain: "project-infinity-1995.firebaseapp.com",
  databaseURL: "https://project-infinity-1995-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-infinity-1995",
  storageBucket: "project-infinity-1995.appspot.com",
  messagingSenderId: "188436326894",
  appId: "1:188436326894:web:ce9c5d7dd6aea8326406ff",
  measurementId: "G-WZR5MDEXCB"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);