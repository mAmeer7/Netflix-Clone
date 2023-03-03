import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyClpoAaAFBR2fApQRnz_6bRs3NAjNBGSz8",
    authDomain: "netflix-77.firebaseapp.com",
    projectId: "netflix-77",
    storageBucket: "netflix-77.appspot.com",
    messagingSenderId: "1034795680231",
    appId: "1:1034795680231:web:65c5111b0b129267603d42"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  export {auth}
  export default db;