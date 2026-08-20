
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-a66ec.firebaseapp.com",
  projectId: "interviewiq-a66ec",
  storageBucket: "interviewiq-a66ec.firebasestorage.app",
  messagingSenderId: "1099347110837",
  appId: "1:1099347110837:web:89e11262c9dc31d8ef87fc"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}