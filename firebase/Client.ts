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
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

// export const auth = getAuth(app);
// export const db = getFirestore(app);

// lib/firebaseClient.ts
// import { getApps, initializeApp, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

const clientApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const authClient = getAuth(clientApp);
export const dbClient = getFirestore(clientApp);
