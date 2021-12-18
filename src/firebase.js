import firebase from 'firebase/app'
import 'firebase/auth'
export const  auth  = firebase.initializeApp({
    apiKey: "AIzaSyB7zzgPlbfGFnUv1OE0VO1SliA3KpaJmc0",
    authDomain: "rect-fireabase.firebaseapp.com",
    projectId: "rect-fireabase",
    storageBucket: "rect-fireabase.appspot.com",
    messagingSenderId: "401716498423",
    appId: "1:401716498423:web:84f25332b918a3f122e8f2"
  }).auth();


