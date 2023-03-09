import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCjNW9UTCCAcGPcT6bluhLC2pa7cnB1wNo",
  authDomain: "fb-clone-f66a8.firebaseapp.com",
  projectId: "fb-clone-f66a8",
  storageBucket: "fb-clone-f66a8.appspot.com",
  messagingSenderId: "733916567887",
  appId: "1:733916567887:web:5260a74e6b4aa4c29e8d3a",
  measurementId: "G-LGL0HDBJ31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
