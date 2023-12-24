// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MESSENGER_ID,
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const messaging = getMessaging(firebaseApp)

export function getDeviceToken() {
    return getToken(messaging, {
        vapidKey: process.env.REACT_APP_FIREBASE_WAPID_KEY,
    })
}
