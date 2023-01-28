import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_BgKhZozpRST9KzXMQGeaGogWBXP7s8I",
  authDomain: "proyecto-curso-pd.firebaseapp.com",
  projectId: "proyecto-curso-pd",
  storageBucket: "proyecto-curso-pd.appspot.com",
  messagingSenderId: "190724772497",
  appId: "1:190724772497:web:dbebee51c02c7d8414e530"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const dbFirestore = getFirestore(app);