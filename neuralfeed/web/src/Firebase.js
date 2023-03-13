import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFZ8q6WWjWmfjysO8c570IEk6BG33wNMw",
  authDomain: "neuralfeed-748c8.firebaseapp.com",
  projectId: "neuralfeed-748c8",
  storageBucket: "neuralfeed-748c8.appspot.com",
  messagingSenderId: "899924620177",
  appId: "1:899924620177:web:03595b077a96d77ab1a030",
  measurementId: "G-CVQZL489YT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

export default db;
