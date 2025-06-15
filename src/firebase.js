import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7Qt_PkwvYmyTTR_WeH2otegu1f982sDg",
  authDomain: "project-f1e23.firebaseapp.com",
  projectId: "project-f1e23",
  storageBucket: "project-f1e23.appspot.com",
  messagingSenderId: "50436381699",
  appId: "1:50436381699:web:dfbd458ff92f41968a4236"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
