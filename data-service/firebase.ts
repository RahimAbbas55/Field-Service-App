import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getAuth , initializeAuth , getReactNativePersistence } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTMbOkMfkJwbDFzxHPyaKJG5_58rtlpfc",
  authDomain: "field-service-a6c86.firebaseapp.com",
  projectId: "field-service-a6c86",
  storageBucket: "field-service-a6c86.firebasestorage.app",
  messagingSenderId: "289449504934",
  appId: "1:289449504934:web:cb4153b7c2d27d7d390467",
  measurementId: "G-TRM0VL1MWN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth, db };