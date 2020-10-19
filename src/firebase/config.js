import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD6o8ancRDKz2jTmvknpsQHxUUGbGwP7_M",
  authDomain: "fire-gram-27fc5.firebaseapp.com",
  databaseURL: "https://fire-gram-27fc5.firebaseio.com",
  projectId: "fire-gram-27fc5",
  storageBucket: "fire-gram-27fc5.appspot.com",
  messagingSenderId: "1004417262937",
  appId: "1:1004417262937:web:7c9957927d670a8db55848",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
