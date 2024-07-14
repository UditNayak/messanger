import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// apiKey: import.meta.env.API_KEY,

const firebaseConfig = {
  apiKey: "AIzaSyCCRGQYJpy4ivVeBFUgf4-8LQGrBkS4sH8",
  authDomain: "chat-app-5b144.firebaseapp.com",
  databaseURL: "https://chat-app-5b144-default-rtdb.firebaseio.com/",
  projectId: "chat-app-5b144",
  storageBucket: "chat-app-5b144.appspot.com",
  messagingSenderId: "1082516986081",
  appId: "1:1082516986081:web:cff173b4f2d8a95c917fa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage()