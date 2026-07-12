
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-f4d6c.firebaseapp.com",
  projectId: "interviewiq-f4d6c",
  storageBucket: "interviewiq-f4d6c.firebasestorage.app",
  messagingSenderId: "687325917128",
  appId: "1:687325917128:web:523b1b00c7cdefb23edafd"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account",
});

export {auth , provider}