import {
  FirebaseApp,
  FirebaseOptions,
  getApp,
  initializeApp,
} from "firebase/app";
import {
  connectAuthEmulator,
  getAuth,
  GithubAuthProvider,
} from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function createFirebaseApp(config: FirebaseOptions): FirebaseApp {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);
// Auth exports
export const auth = getAuth(firebaseApp);
if (process.env.NEXT_PUBLIC_FIREBASE_EMULATORS) {
  connectAuthEmulator(auth, "http://localhost:9099");
}

export const githubProvider = new GithubAuthProvider();

// Firestore exports
export const firestore = getFirestore(firebaseApp);
if (process.env.NEXT_PUBLIC_FIREBASE_EMULATORS) {
  connectFirestoreEmulator(firestore, "localhost", 8080);
}

// Storage exports
export const storage = getStorage(firebaseApp);
if (process.env.NEXT_PUBLIC_FIREBASE_EMULATORS) {
  connectStorageEmulator(storage, "localhost", 9199);
}
