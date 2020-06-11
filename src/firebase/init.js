import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDJ8D4h1QZp1NcVODSgHIm8GMa9l3xY5bo",
  authDomain: "udemy-ninja-smoothies-b909d.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-b909d.firebaseio.com",
  projectId: "udemy-ninja-smoothies-b909d",
  storageBucket: "udemy-ninja-smoothies-b909d.appspot.com",
  messagingSenderId: "283586226417",
  appId: "1:283586226417:web:ef8f61866d3f7ea339a150",
  measurementId: "G-TYVZ981SS1"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//export firestore database
export default firebaseApp.firestore();
