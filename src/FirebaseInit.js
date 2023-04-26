// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN38NzMaajVQsTbuM2KZp4ke7mf4bz8rA",
  authDomain: "blogging-app-223d5.firebaseapp.com",
  projectId: "blogging-app-223d5",
  storageBucket: "blogging-app-223d5.appspot.com",
  messagingSenderId: "490775518917",
  appId: "1:490775518917:web:8d43ccac44bb3e26851aac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);