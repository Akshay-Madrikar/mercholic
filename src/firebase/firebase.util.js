import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCmbXrIctWjIQ9HYTeOK2TAgSZWLvUAipY",
    authDomain: "mercholic-db.firebaseapp.com",
    databaseURL: "https://mercholic-db.firebaseio.com",
    projectId: "mercholic-db",
    storageBucket: "mercholic-db.appspot.com",
    messagingSenderId: "559405966154",
    appId: "1:559405966154:web:505198cb69e96cb8fcd7b3",
    measurementId: "G-96D26XMM1R"
};

firebase.initializeApp( config );

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup( provider );

export default firebase;