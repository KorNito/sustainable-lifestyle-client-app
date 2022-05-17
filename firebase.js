// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXQug_1bNcPMf6KyuKBUJ4rKOkzcdzA8A",
  authDomain: "sustainable-lifestyle-30c7b.firebaseapp.com",
  databaseURL:
    "https://sustainable-lifestyle-30c7b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sustainable-lifestyle-30c7b",
  storageBucket: "sustainable-lifestyle-30c7b.appspot.com",
  messagingSenderId: "425155902027",
  appId: "1:425155902027:web:fd0cfb123f00ef29d06bce",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// MARK: Firestore Reference
export const db = getFirestore(app);
