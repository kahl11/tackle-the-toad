// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2jeSbaRceU_LKcJBqYo0STsizqXDegJs",
  authDomain: "tacklethetoad-8b166.firebaseapp.com",
  projectId: "tacklethetoad-8b166",
  storageBucket: "tacklethetoad-8b166.appspot.com",
  messagingSenderId: "1096942987607",
  appId: "1:1096942987607:web:d8b5928673fd7a4017f612",
  measurementId: "G-YG5N0JLH7X"
};

// Initialize Firebase
if (typeof window !== "undefined") {
  const app = initializeApp(firebaseConfig);
}
export const db = (typeof window !== "undefined") ? getFirestore(app) : null;