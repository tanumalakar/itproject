// ============================================================
// FIREBASE CONFIGURATION
// 1) Open Firebase Console -> Project settings -> Your apps
// 2) Register a Web App if you have not already.
// 3) Copy the firebaseConfig object and replace the values below.
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "PASTE_API_KEY_HERE",
  authDomain: "PASTE_PROJECT_ID_HERE.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID_HERE",
  storageBucket: "PASTE_STORAGE_BUCKET_HERE",
  messagingSenderId: "PASTE_MESSAGING_SENDER_ID_HERE",
  appId: "PASTE_APP_ID_HERE"
};

const firebaseReady = !Object.values(firebaseConfig).some(v => String(v).includes("PASTE_"));

let app = null, db = null, storage = null;
if (firebaseReady) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  storage = getStorage(app);
}

export { db, storage, firebaseReady };
