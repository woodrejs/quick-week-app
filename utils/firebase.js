import * as firebase from "firebase";
import "@firebase/firestore";

//@react-native-firebase/app uninstall !!!!!!!!!!!!!!!!!!

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCnvvFp2Lg-fbtFf7dKbLVgeOP819sGEdA",
  authDomain: "quickweekapp.firebaseapp.com",
  databaseURL: "https://quickweekapp.firebaseio.com",
  projectId: "quickweekapp",
  storageBucket: "quickweekapp.appspot.com",
  messagingSenderId: "571694809458",
  appId: "1:571694809458:web:d00ba2e983b937d5885deb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
