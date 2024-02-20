//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyBXxUfV9r81su1yiFtuzoKmxN95Qy3CfN8",
    authDomain: "project-7423790825325377175.firebaseapp.com",
    projectId: "project-7423790825325377175",
    storageBucket: "project-7423790825325377175.appspot.com",
    messagingSenderId: "533980879116",
    appId: "1:533980879116:web:fabb4e6157070604495129"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
