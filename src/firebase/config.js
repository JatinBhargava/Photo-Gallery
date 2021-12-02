 //import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
 import 'firebase/compat/storage';
 import 'firebase/compat/firestore';

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCkf2n-3CCYreEf8UF7vApyIc-2MmKFFHY",
    authDomain: "digi-gallery.firebaseapp.com",
    projectId: "digi-gallery",
    storageBucket: "digi-gallery.appspot.com",
    messagingSenderId: "172393977516",
    appId: "1:172393977516:web:9c5674614729585affb109"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStorage = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFireStorage, timestamp}