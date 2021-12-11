import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACbd55OmjPaN5f6ZEed5qW793dzklEgws",
  authDomain: "linkedin-clone-4fbba.firebaseapp.com",
  projectId: "linkedin-clone-4fbba",
  storageBucket: "linkedin-clone-4fbba.appspot.com",
  messagingSenderId: "75253081883",
  appId: "1:75253081883:web:f616f094b1d3014dcc55be",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
