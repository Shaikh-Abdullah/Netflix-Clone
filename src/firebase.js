import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAsqSIdYuZAZh5dkgTWd-p0gGfqVu9YcFQ",
    authDomain: "netfilx-2-0.firebaseapp.com",
    projectId: "netfilx-2-0",
    storageBucket: "netfilx-2-0.appspot.com",
    messagingSenderId: "66540847061",
    appId: "1:66540847061:web:3ffddf6f55fbc12533875c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;