import firebase from "firebase"
/*
const firebaseConfig = {
    apiKey: "AIzaSyDLbvFPAdISR5yb6lg--KPh96AZ2EcKNi8",
    authDomain: "tinder--final.firebaseapp.com",
    projectId: "tinder--final",
    storageBucket: "tinder--final.appspot.com",
    messagingSenderId: "669725022763",
    appId: "1:669725022763:web:ad4a3e501b4ceb7b68686e"
  };
*/
const firebaseConfig = {
  apiKey: "AIzaSyBvkxabFrni3hnLGlp7uMI7PDhWcBCBzP4",
  authDomain: "touchme-c7c6c.firebaseapp.com",
  projectId: "touchme-c7c6c",
  storageBucket: "touchme-c7c6c.appspot.com",
  messagingSenderId: "356224232030",
  appId: "1:356224232030:web:307d27205087848803e2cf"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  export default database;