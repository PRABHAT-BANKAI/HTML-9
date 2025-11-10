// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPFvKxi5GyRArLxm2_jA8gj04uY7729QE",
  authDomain: "todo-project-1-318f7.firebaseapp.com",
  projectId: "todo-project-1-318f7",
  storageBucket: "todo-project-1-318f7.firebasestorage.app",
  messagingSenderId: "642503844149",
  appId: "1:642503844149:web:ed325557633bcf419bec7c",
  measurementId: "G-M4NDZL55GW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
export { auth, provider };
