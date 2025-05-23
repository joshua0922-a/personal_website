import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEDP34MIekYn1HlBRjVOK5t06COuIj1_k",
  authDomain: "portfolio-contact-1cc34.firebaseapp.com",
  projectId: "portfolio-contact-1cc34",
  storageBucket: "portfolio-contact-1cc34.firebasestorage.app",
  messagingSenderId: "553714641388",
  appId: "1:553714641388:web:94ef3a69a1fbda2296f8c9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
