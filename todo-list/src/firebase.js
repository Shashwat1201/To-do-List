// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase";

const firebaseApp = firebase.initializeApp(  {
    apiKey: "AIzaSyBoxMlsenYw6zBAi9N3o5dIRcAyc00U21c",
    authDomain: "todo-list-f4deb.firebaseapp.com",
    projectId: "todo-list-f4deb",
    storageBucket: "todo-list-f4deb.appspot.com",
    messagingSenderId: "305053636800",
    appId: "1:305053636800:web:d00e5d4f6be6006fda3525",
    measurementId: "G-76QYJQVT4Z"
  });

const db=firebaseApp.firestore();
  export default db ; 