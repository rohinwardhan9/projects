// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeVFhno2asw09MPO_59kvvf0u87HuoFcU",
  authDomain: "vite-contact-abd39.firebaseapp.com",
  projectId: "vite-contact-abd39",
  storageBucket: "vite-contact-abd39.appspot.com",
  messagingSenderId: "808303619489",
  appId: "1:808303619489:web:669f528136cfe2b110efe0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);