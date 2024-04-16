// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a2195.firebaseapp.com",
  projectId: "mern-estate-a2195",
  storageBucket: "mern-estate-a2195.appspot.com",
  messagingSenderId: "696193286113",
  appId: "1:696193286113:web:3bf3def52cdb2104769ca0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
