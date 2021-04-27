import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBy7XjyA2H2J9Rq5D-ntr7wZQwhDMxpC5k",
    authDomain: "crwn-db-1ea62.firebaseapp.com",
    projectId: "crwn-db-1ea62",
    storageBucket: "crwn-db-1ea62.appspot.com",
    messagingSenderId: "782219905913",
    appId: "1:782219905913:web:2ff7daf4498b0962f9fda8",
    measurementId: "G-8LTRW8KYLD"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

