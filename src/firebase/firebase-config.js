// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyoQziZIrHEhW--Df9LdXpydgigcF5Dmc",
  authDomain: "react-app-cursos-ee259.firebaseapp.com",
  projectId: "react-app-cursos-ee259",
  storageBucket: "react-app-cursos-ee259.appspot.com",
  messagingSenderId: "710792901847",
  appId: "1:710792901847:web:f9718e427069f8be336c92"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, 
    googleAuthProvider,
    firebase
}