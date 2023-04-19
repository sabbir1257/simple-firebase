// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXR-5GZGQ2XdT4QVKIzwnf81VMVJrSz6M",
  authDomain: "simple-firebase-cd5ea.firebaseapp.com",
  projectId: "simple-firebase-cd5ea",
  storageBucket: "simple-firebase-cd5ea.appspot.com",
  messagingSenderId: "1010618481046",
  appId: "1:1010618481046:web:cb66c5dd77d1f4db9c45b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;