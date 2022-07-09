// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDI6_ZPvm2Bk4QfYdLkfsJ4IatH5eTbGHM",
    authDomain: "auchocolat-a190c.firebaseapp.com",
    projectId: "auchocolat-a190c",
    storageBucket: "auchocolat-a190c.appspot.com",
    messagingSenderId: "1050557617495",
    appId: "1:1050557617495:web:eef5b8ed00fb5efae45a12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp =()=>{
    return app;
}
