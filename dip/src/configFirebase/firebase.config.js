import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBwk75aBrrEBMt9-5tiCeKtmbmoPF869lc",
  authDomain: "recipes-auth-352d5.firebaseapp.com",
  databaseURL: "https://recipes-auth-352d5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "recipes-auth-352d5",
  storageBucket: "recipes-auth-352d5.appspot.com",
  messagingSenderId: "533249608171",
  appId: "1:533249608171:web:c96c30fac02fcc907471ae",
  measurementId: "G-EWRWCS3E5Q"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app)

// export const logIn = signInWithEmailAndPassword.bind(null, auth)