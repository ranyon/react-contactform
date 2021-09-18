import { initializeApp } from "firebase";
import firebase from "firebase";
import 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDfX9kRWo2Sqyi1v6fp4IcUiloi20Ju8Bo",
  authDomain: "contact-form-ff47e.firebaseapp.com",
  projectId: "contact-form-ff47e",
  storageBucket: "contact-form-ff47e.appspot.com",
  messagingSenderId: "984626184955",
  appId: "1:984626184955:web:7d2fe3e0b426012e79265e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default firebase;