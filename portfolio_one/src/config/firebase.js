import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';
import { getDatabase, ref, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB5FUS9bHUm_RP-J3UmLqFBH950uGBwAP4',
  authDomain: 'online-website-34c0c.firebaseapp.com',
  databaseURL: 'https://online-website-34c0c-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'online-website-34c0c',
  storageBucket: 'online-website-34c0c.appspot.com',
  messagingSenderId: '209976406138',
  appId: '1:209976406138:web:e2ff1086907a7382788bc3',
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics, database };