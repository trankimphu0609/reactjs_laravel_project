// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzNIk12UUpWsve6Pc0f7Vce6mJGmlcyG8",
  authDomain: "mnmimg-b047c.firebaseapp.com",
  projectId: "mnmimg-b047c",
  storageBucket: "mnmimg-b047c.appspot.com",
  messagingSenderId: "132831806602",
  appId: "1:132831806602:web:5ac0b8a79e4dc7924b5973",
  measurementId: "G-DFH9FMHP0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

const analytics = getAnalytics(app);