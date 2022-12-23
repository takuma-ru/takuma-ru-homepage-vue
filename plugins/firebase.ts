import { initializeApp } from 'firebase/app'
import { enableIndexedDbPersistence, getFirestore } from 'firebase/firestore'
// import { connectFunctionsEmulator, getFunctions } from 'firebase/functions'

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: 'AIzaSyAd7PUFVVby6imYhUsxMZRLxEgW93yKgKY',
    authDomain: 'takuma-ru-homepage.firebaseapp.com',
    projectId: 'takuma-ru-homepage',
    storageBucket: 'takuma-ru-homepage.appspot.com',
    messagingSenderId: '148355785804',
    appId: '1:148355785804:web:52d78ef58e7ca6405d40e9',
    measurementId: 'G-ZQ2D7FGNCV'
  }

  const app = initializeApp(firebaseConfig)
  const firestore = getFirestore(app)
  // const functions = getFunctions(app)

  // connectFunctionsEmulator(functions, 'localhost', 5001)

  enableIndexedDbPersistence(firestore)
    .catch((err) => {
      if (err.code === 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
      } else if (err.code === 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistencey
        // ...
      }
    })
})
