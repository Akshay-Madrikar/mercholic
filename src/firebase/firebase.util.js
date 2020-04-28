import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { CONFIG } from './configFile';

const config = CONFIG;

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
};

export const convertCategorySnapshotToMap = ( categorySnapshot ) => {
    const transformedCategory = categorySnapshot.docs.map(docSnapshot => {
        const { title, data } = docSnapshot.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: docSnapshot.id,
            title,
            data
        };
    });

    return transformedCategory.reduce((accumulator, category) => {
        accumulator[category.title.toLowerCase()] = category;
        return accumulator;
    },{});

};

export const convertCollectionSnapshotToMap = ( collections ) => {
    const transformedCollection = collections.docs.map(doc => {
        const { name, linkUrl, imageUrl, items } = doc.data();

        return {
            id: doc.id,
            name,
            imageUrl,
            linkUrl,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.name.toLowerCase()] = collection;
        return accumulator;
    },{});
};

//                      !----- For manually adding data into firestore---------!>

// export const addExploreAndDocuments = async (exploreKey, objectsToAdd) => {
//     const exploreRef = firestore.collection(exploreKey);
//     console.log(exploreRef);

//     const batch = firestore.batch();
//     objectsToAdd.forEach(obj => {
//         const newDocRef = exploreRef.doc();
//         batch.set(newDocRef, obj);
//     });

//     return await batch.commit();
// };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup( provider );

export default firebase;