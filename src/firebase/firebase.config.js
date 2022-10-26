// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAw6RkpbaSl4Js6e2XpmubtGe33RAfVvEQ",
    authDomain: "platinam-tutorial.firebaseapp.com",
    projectId: "platinam-tutorial",
    storageBucket: "platinam-tutorial.appspot.com",
    messagingSenderId: "51689829058",
    appId: "1:51689829058:web:6354784d2197f330b9415b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;