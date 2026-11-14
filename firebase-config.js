import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBniobe4lOFy-2JXaEOQ6-C4O74GJ1DK2g",
  authDomain: "clzrecsystem.firebaseapp.com",
  projectId: "clzrecsystem",
  storageBucket: "clzrecsystem.firebasestorage.app",
  messagingSenderId: "816247133479",
  appId: "1:816247133479:web:6040e331039c2a68f44502",
  measurementId: "G-D9G1J13VCQ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const secondaryApp = initializeApp(firebaseConfig, "Secondary");
export const secondaryAuth = getAuth(secondaryApp);
