// Import the functions you need from the SDKs you need
import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe3324xn6D2mG25WXbshJeHynbS1Q3aBY",

  authDomain: "baro-6p3kmc.firebaseapp.com",

  projectId: "baro-6p3kmc",

  storageBucket: "baro-6p3kmc.appspot.com",

  messagingSenderId: "301982493416",

  appId: "1:301982493416:web:25dc2635a965b5bf9a375d"

}

// Initialize Firebase
const app = getApps().length ? getApp : initializeApp(firebaseConfig)
const auth = getAuth(app as FirebaseApp)
const db = getFirestore(app as FirebaseApp)
const functions = getFunctions(app as FirebaseApp)

export { auth, db, functions }
