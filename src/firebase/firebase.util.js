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

export const createUserProfileDocument = async ( userAuth, additonalData ) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additonalData
            })
        } catch( error ) {
            console.log("Error while creating user object", error.message);
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup( provider );

export default firebase;