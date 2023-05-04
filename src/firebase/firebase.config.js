// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAThXcRkUtc7vSJI2NbLfqHHT45gDCRn9o",
  authDomain: "chefs-galore.firebaseapp.com",
  projectId: "chefs-galore",
  storageBucket: "chefs-galore.appspot.com",
  messagingSenderId: "338449526535",
  appId: "1:338449526535:web:bc540883df9ecd58811fa2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
