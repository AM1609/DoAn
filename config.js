import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAABsuvI5K_wwNNkx-0VK9SSA0pZvEOLCk",
  authDomain: "doan-c91dd.firebaseapp.com",
  projectId: "doan-c91dd",
  storageBucket: "doan-c91dd.appspot.com",
  messagingSenderId: "995611351742",
  appId: "1:995611351742:web:1da3831af9c56f03829cef",
  measurementId: "G-7LZKDCN2JH"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };