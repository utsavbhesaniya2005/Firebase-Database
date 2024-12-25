// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3pj_N38pSpGMnaiL4JffYPU6T0EcarrU",
  authDomain: "recipe-sharing-web.firebaseapp.com",
  projectId: "recipe-sharing-web",
  storageBucket: "recipe-sharing-web.firebasestorage.app",
  messagingSenderId: "684470078307",
  appId: "1:684470078307:web:7245c83196b82237bba156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();