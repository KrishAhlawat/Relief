// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  collection,
  query,
  orderBy,
  getDocs,
  addDoc,
  Timestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const fetchReliefPoints = () =>
  getDocs(query(reliefCol, orderBy("createdAt", "desc")));

type ReliefPoint = {
  id: string;
  name: string;
  location: string;
  createdAt?: Timestamp;
  createdBy?: string;
};

export const addReliefPoint = (
  data: Omit<ReliefPoint, "createdAt" | "createdBy"> & { createdBy: string }
) => addDoc(reliefCol, { ...data, createdAt: Timestamp.now() });

export const db = getFirestore(app);
const reliefCol = collection(db, "relief_points");
export const auth = getAuth(app);
