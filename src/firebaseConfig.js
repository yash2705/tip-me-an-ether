import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// const firebaseConfig = {
// //   apiKey: process.env.API_KEY,
// //   authDomain: process.env.AUTH_DOMAIN,
// //   projectId: process.env.PROJECT_ID,
// //   storageBucket: process.env.STORAGE_BUCKET,
// //   messagingSenderId: process.env.MESSAGING_SENDER_ID,
// //   appId: process.env.APP_ID,
// }

const firebaseConfig = {
  apiKey: "AIzaSyAwhdoG-2twR5VyDieadJQHK-Bk4aaVhZY",
  authDomain: "tip-me-an-ether.firebaseapp.com",
  projectId: "tip-me-an-ether",
  storageBucket: "tip-me-an-ether.appspot.com",
  messagingSenderId: "683079910626",
  appId: "1:683079910626:web:2bb7644e64f4d09d260abb",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
