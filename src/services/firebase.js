// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkpdDGeH9ljAR6myAVl3JsIcvDffzKwfY",
    authDomain: "q-d-up.firebaseapp.com",
    projectId: "q-d-up",
    storageBucket: "q-d-up.appspot.com",
    messagingSenderId: "101354648442",
    appId: "1:101354648442:web:7b0c3ef8781b4f20ac5cc3",
    measurementId: "G-R1RVZETNKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);