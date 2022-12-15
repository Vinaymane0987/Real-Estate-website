import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChWB_BGO4yCTH3H-8TlwJyGGdrEoa_jwA",
  authDomain: "vinsapartment-club.firebaseapp.com",
  databaseURL: "https://vinsapartment-club-default-rtdb.firebaseio.com",
  projectId: "vinsapartment-club",
  storageBucket: "vinsapartment-club.appspot.com",
  messagingSenderId: "150368376210",
  appId: "1:150368376210:web:da0667542a2a77af139d4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, storage };
export default db;
