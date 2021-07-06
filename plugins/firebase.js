import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAnsGhm-1Yt8UaxqC8U48FoCu1YdYh6bD4",
    authDomain: "erick-82dba.firebaseapp.com",
    projectId: "erick-82dba",
    storageBucket: "erick-82dba.appspot.com",
    messagingSenderId: "375771614862",
    appId: "1:375771614862:web:7922ad00babe2f7cb8c3df",
    measurementId: "G-5RB9TY14LC"
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// firebase.analytics();

export const db = firebase.firestore()
export const auth = firebase.auth()
// export const storage = firebase.storage()