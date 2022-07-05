// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcmU7pheT1-BzMGRtRDiymc12evI5QZEI",
  authDomain: "bookers-fbfb2.firebaseapp.com",
  databaseURL: "https://bookers-fbfb2-default-rtdb.firebaseio.com",
  projectId: "bookers-fbfb2",
  storageBucket: "bookers-fbfb2.appspot.com",
  messagingSenderId: "458830251600",
  appId: "1:458830251600:web:bd14121626535af1b03355",
  measurementId: "G-E411KHX3Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);