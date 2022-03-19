import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import {getStorage} from "firebase/storage"
// import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYrl3f9BOBPP2X3IJb3kIx_HdhZzXjRSE",
  authDomain: "disney-909ac.firebaseapp.com",
  projectId: "disney-909ac",
  storageBucket: "disney-909ac.appspot.com",
  messagingSenderId: "693338120781",
  appId: "1:693338120781:web:07250a3d0f7b2c5a573204",
  measurementId: "G-T2NW1ZJMBL",
};
const firebaseApp = initializeApp(firebaseConfig);
 export const db = getFirestore(firebaseApp);
// const db = firebaseApp.firestore();
export const auth = getAuth(firebaseApp);
// const provider = new GoogleAuthProvider()
// const storage = getStorage()

// export default db;
