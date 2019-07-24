import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCpzprJGJ-KZ-RatuREWWMNyVEsE5HkqpQ",
  authDomain: "crwn-db-66baf.firebaseapp.com",
  databaseURL: "https://crwn-db-66baf.firebaseio.com",
  projectId: "crwn-db-66baf",
  storageBucket: "",
  messagingSenderId: "570313774639",
  appId: "1:570313774639:web:b93d51ba5f47a2a2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData })
    } catch (error) {
      console.log("error creating user"+ error);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider).then((result) => {
  console.log("check the result"+ result);
});

export default firebase;
