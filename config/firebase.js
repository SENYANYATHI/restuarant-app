
// import { initializeApp } from "firebase/app";

// import {getAuth} from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyBV8CWUcg7tBpcaSNBvY5c_v7Uxdtpm-W0",
//   authDomain: "group-app-56aea.firebaseapp.com",
//   projectId: "group-app-56aea",
//   storageBucket: "group-app-56aea.appspot.com",
//   messagingSenderId: "719063170035",
//   appId: "1:719063170035:web:52cda9bc7074f137343086",
//   measurementId: "G-G1674WW381"
// };


// const app = initializeApp(firebaseConfig);


// export const auth=getAuth (app) ;

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