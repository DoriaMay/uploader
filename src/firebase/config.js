import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQ8_J7p6XZUrb8RaqMooENtYJZYzwNKdc",
    authDomain: "uploader-ea5b2.firebaseapp.com",
    projectId: "uploader-ea5b2",
    storageBucket: "uploader-ea5b2.appspot.com",
    messagingSenderId: "259128351878",
    appId: "1:259128351878:web:9b2288d2c34cb5ac7e0507"
  };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebaseApp.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };
