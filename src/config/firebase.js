// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHM5G7zehlVlQWJmSas_OOSCYvs5LJF-g",
  authDomain: "socialify-a01b5.firebaseapp.com",
  projectId: "socialify-a01b5",
  storageBucket: "socialify-a01b5.appspot.com",
  messagingSenderId: "23662297536",
  appId: "1:23662297536:web:d60447227810a6831dc825",
  measurementId: "G-ZTXLVF3RHQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
