// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCbQmYdg3ryev2lJ6AkFfTGrlf5HHAFEeY",
  authDomain: "exam-7month.firebaseapp.com",
  projectId: "exam-7month",
  storageBucket: "exam-7month.appspot.com",
  messagingSenderId: "65190203641",
  appId: "1:65190203641:web:061d564d9fa92026721228"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();