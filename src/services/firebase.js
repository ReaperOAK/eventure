// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWsDiJnUVafRIvheOeSs3sI3jzH-xgm-g",
  authDomain: "eventure-fest.firebaseapp.com",
  projectId: "eventure-fest",
  storageBucket: "eventure-fest.firebasestorage.app",
  messagingSenderId: "7433680643",
  appId: "1:7433680643:web:a3d0c9ebdc73321d105b36",
  measurementId: "G-GFH6F4GKGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;