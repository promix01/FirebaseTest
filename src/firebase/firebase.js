import firebase from 'firebase/app'
import "firebase/firestore"
var firebaseConfig = {
    apiKey: "AIzaSyBXPymFIP12DTfuafnDoNl1KCyFCigsZHQ",
    authDomain: "siam-remote-iot-46576.firebaseapp.com",
    databaseURL: "https://siam-remote-iot-46576.firebaseio.com",
    projectId: "siam-remote-iot-46576",
    storageBucket: "siam-remote-iot-46576.appspot.com",
    messagingSenderId: "841157469260",
    appId: "1:841157469260:web:0db0e4d93d86512ff780e9"
  };
  // Initialize Firebase
  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore()