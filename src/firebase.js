import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyBrOwGr9t6D0In-_hXyw4JbntlZph_wYgE",
  authDomain: "linkedin-clone-b9978.firebaseapp.com",
  projectId: "linkedin-clone-b9978",
  storageBucket: "linkedin-clone-b9978.appspot.com",
  messagingSenderId: "254470512660",
  appId: "1:254470512660:web:4684b5c18c8c9ead5d0701",
  measurementId: "G-56VBMFKMW1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };