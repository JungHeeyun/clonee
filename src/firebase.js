// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAo_PILqdxQ69PJv-8txXqKgX6_9OO2kzo",
  authDomain: "randchat-ff82f.firebaseapp.com",
  projectId: "randchat-ff82f",
  storageBucket: "randchat-ff82f.appspot.com",
  messagingSenderId: "918862606021",
  appId: "1:918862606021:web:fc9f6612db3842d8624aac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
