// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB0lsg1fdY6fdtfGP95IkqezyUocvEtgg",
  authDomain: "netflix-gpt-a0146.firebaseapp.com",
  projectId: "netflix-gpt-a0146",
  storageBucket: "netflix-gpt-a0146.appspot.com",
  messagingSenderId: "376289960997",
  appId: "1:376289960997:web:4c778820284aa8f7024bcc",
  measurementId: "G-4NNZSCFSPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();