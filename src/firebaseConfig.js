import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// Your Firebase Config (replace with your actual credentials)
const firebaseConfig = {
    apiKey: "AIzaSyAO-TjvkQhORD8IgdWjFLLJPWBCSrgfBOo",
    authDomain: "fest-t.firebaseapp.com",
    projectId: "fest-t",
    storageBucket: "fest-t.firebasestorage.app",
    messagingSenderId: "798223653285",
    appId: "1:798223653285:web:a852f10b2add586985704c",
    measurementId: "G-3B9PBB0SRB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
