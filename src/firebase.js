import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcBZxebmEGFjYTJdfQNPs6JzgKs2T_YAI",
  authDomain: "netflix-full-stack.firebaseapp.com",
  projectId: "netflix-full-stack",
  storageBucket: "netflix-full-stack.appspot.com",
  messagingSenderId: "953450932414",
  appId: "1:953450932414:web:1d4837f70c672ea4cf16ef",
  measurementId: "G-2K5QT1M1CY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
