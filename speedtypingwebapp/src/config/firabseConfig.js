// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth"
// import { getFirestore } from "firebase/firestore"
// const firebaseConfig = {
//     apiKey: "AIzaSyAtmrfdrOuPC6Yw57AvdmmTcdchg0Z7zNg",
//     authDomain: "chatapppedro-a1e15.firebaseapp.com",
//     projectId: "chatapppedro-a1e15",
//     storageBucket: "chatapppedro-a1e15.appspot.com",
//     messagingSenderId: "529014965758",
//     appId: "1:529014965758:web:a865632d13dbdb16cdecaf"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// export const provider = new GoogleAuthProvider()
// export const db = getFirestore(app)


import firebase from 'firebase/compat/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAtmrfdrOuPC6Yw57AvdmmTcdchg0Z7zNg",
    authDomain: "chatapppedro-a1e15.firebaseapp.com",
    projectId: "chatapppedro-a1e15",
    storageBucket: "chatapppedro-a1e15.appspot.com",
    messagingSenderId: "529014965758",
    appId: "1:529014965758:web:a865632d13dbdb16cdecaf"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(Firebase)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(Firebase)