// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e2ef9.firebaseapp.com",
  projectId: "mern-blog-e2ef9",
  storageBucket: "mern-blog-e2ef9.appspot.com",
  messagingSenderId: "866641529103",
  appId: "1:866641529103:web:b4867caf981633fe6bd67a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
