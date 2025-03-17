import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// Your Firebase Config (replace with your actual credentials)
const firebaseConfig = {
    apiKey: "AIzaSyCOzvsN7U8_Qtxg7Hi1aFRqe4EpAHSEZdM",
  authDomain: "fest-5983f.firebaseapp.com",
  projectId: "fest-5983f",
  storageBucket: "fest-5983f.firebasestorage.app",
  messagingSenderId: "392145511319",
  appId: "1:392145511319:web:8b5841c6258648d8db1ad2",
  measurementId: "G-5Z9FFB2PHT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
