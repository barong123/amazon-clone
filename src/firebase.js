// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNlihQS61WDVnVneHjIbTFP4-Qu6phhQc",
  authDomain: "clone-7803d.firebaseapp.com",
  projectId: "clone-7803d",
  storageBucket: "clone-7803d.appspot.com",
  messagingSenderId: "933508069894",
  appId: "1:933508069894:web:19f35da88535316b66e187",
  measurementId: "G-5S47J9VRKZ"
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };