// // admin.ts
// import { getApps, initializeApp, cert } from "firebase-admin/app";
// import { getAuth }                   from "firebase-admin/auth";
// import { getFirestore }              from "firebase-admin/firestore";

// const initFirebaseAdmin = () => {
//   if (!getApps().length) {
//     initializeApp({
//       credential: cert({
//         projectId:  process.env.FIREBASE_PROJECT_ID,
//         clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//         privateKey: process.env.FIREBASE_PRIVATE_KEY
//           ?.replace(/\\n/g, "\n"),
//       }),
//     });
//   }

//   return {
//     auth: getAuth(),      // ← Admin Auth
//     db:   getFirestore(), // ← Admin Firestore
//   };
// };

// export const { auth, db } = initFirebaseAdmin();
// lib/firebaseAdmin.ts
import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";




if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID!,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    }),
  });
}


export const authAdmin = getAuth();
export const dbAdmin = getFirestore();
