import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
//
  };
  // Initialize Firebase
const firebaseApp =  firebase.initializeApp(firebaseConfig);

// export firestore database

export default firebaseApp.firestore();