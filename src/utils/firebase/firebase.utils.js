import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB7ox362lRI3Te-5uR3q6JEHyhej8dkd_0',
  authDomain: 'crwn-clothing-3e5b9.firebaseapp.com',
  projectId: 'crwn-clothing-3e5b9',
  storageBucket: 'crwn-clothing-3e5b9.appspot.com',
  messagingSenderId: '525876318697',
  appId: '1:525876318697:web:38bfd85671ad9d51ed7b78',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provide = new GoogleAuthProvider();

provide.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provide);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};
