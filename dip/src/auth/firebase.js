import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyBwk75aBrrEBMt9-5tiCeKtmbmoPF869lc",
    authDomain: "recipes-auth-352d5.firebaseapp.com",
    projectId: "recipes-auth-352d5",
    storageBucket: "recipes-auth-352d5.appspot.com",
    messagingSenderId: "533249608171",
    appId: "1:533249608171:web:c96c30fac02fcc907471ae",
    measurementId: "G-EWRWCS3E5Q"
}

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();