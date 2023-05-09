import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA6AkYFwvCRFIs08tkY0VXHx200ShtApac",
    authDomain: "netflix-clone-e5410.firebaseapp.com",
    projectId: "netflix-clone-e5410",
    storageBucket: "netflix-clone-e5410.appspot.com",
    messagingSenderId: "554583599498",
    appId: "1:554583599498:web:275b1a83bb95543e4ec073"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword};
export default db;