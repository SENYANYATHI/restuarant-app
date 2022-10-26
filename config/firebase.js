
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCLm_hBFfy9UkxKTzilkfICGj1Z_-CpVQ",
  authDomain: "resturant-5d525.firebaseapp.com",
  projectId: "resturant-5d525",
  storageBucket: "resturant-5d525.appspot.com",
  messagingSenderId: "551642279953",
  appId: "1:551642279953:web:8d012b6cdada87cc0a81b0",
  measurementId: "G-Y5CCWPJFFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);