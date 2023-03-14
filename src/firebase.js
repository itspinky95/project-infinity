import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from '../config/firebase.js/'
import { getPerformance } from "firebase/performance";
import { getFunctions } from "firebase/functions";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const performance = getPerformance(app);
export const functions = getFunctions(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);