// // Import the functions you need from the SDKs you need
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB7LwNI-hoOxkVbSD0SQcDY6EI8dURAAY8",
//   authDomain: "prepwise-53225.firebaseapp.com",
//   projectId: "prepwise-53225",
//   storageBucket: "prepwise-53225.firebasestorage.app",
//   messagingSenderId: "668337312295",
//   appId: "1:668337312295:web:eed5ebaeda956ec6b6b402",
// };

// // Initialize Firebase
// // const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// export const auth = getAuth(app);
// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7LwNI-hoOxkVbSD0SQcDY6EI8dURAAY8",
  authDomain: "prepwise-53225.firebaseapp.com",
  projectId: "prepwise-53225",
  storageBucket: "prepwise-53225.firebasestorage.app",
  messagingSenderId: "668337312295",
  appId: "1:668337312295:web:eed5ebaeda956ec6b6b402",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
