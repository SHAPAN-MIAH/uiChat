import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';

const InitFirebase = () => {
  initializeApp(firebaseConfig);
}

export default InitFirebase;