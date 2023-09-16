
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCaL0ZgbEqL2r5cJY76ee8RTpSs11J1tbA",
  authDomain: "miniblog-4da11.firebaseapp.com",
  projectId: "miniblog-4da11",
  storageBucket: "miniblog-4da11.appspot.com",
  messagingSenderId: "618585516200",
  appId: "1:618585516200:web:bab3bbd3109eff6dac7a9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }
