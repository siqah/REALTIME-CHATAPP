// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzFYjfDYhOvHiNTGAs9HyCvq_Y-UTSsMo",
  authDomain: "chatapp-4b65e.firebaseapp.com",
  projectId: "chatapp-4b65e",
  storageBucket: "chatapp-4b65e.appspot.com",
  messagingSenderId: "274609605744",
  appId: "1:274609605744:web:e4423a503efa1d6937b8b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();