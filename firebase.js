import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
