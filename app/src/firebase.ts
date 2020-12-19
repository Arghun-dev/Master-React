import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDspjXqIj8epFzBkjROUEuWsLZfmgSszI4",
    authDomain: "master-react-a26ca.firebaseapp.com",
    projectId: "master-react-a26ca",
    storageBucket: "master-react-a26ca.appspot.com",
    messagingSenderId: "360478541067",
    appId: "1:360478541067:web:ea9d0959d8bd58d2280e0e",
    measurementId: "G-QZN7NX8PEX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();