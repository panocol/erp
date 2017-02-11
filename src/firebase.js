import firebase from 'firebase';
import firebaseui from 'firebaseui';


const firebaseConfig = {
  apiKey: "AIzaSyBwjHWbSQe0coDhoeMs4DKxi4X47dlWRPc",
  authDomain: "energy-74026.firebaseapp.com",
  databaseURL: "https://energy-74026.firebaseio.com",
  storageBucket: "energy-74026.appspot.com",
  messagingSenderId: "239075390426"
};

const uiConfig = {
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>'
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseAuthUI = new firebaseui.auth.AuthUI(firebaseAuth);
export const firebaseUIConfig = uiConfig;
export const firebaseDb = firebaseApp.database();

