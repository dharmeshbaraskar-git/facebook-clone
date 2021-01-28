import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD3zFGNoPHlsFnvtBXY0-JhPD7-HBMiWXI",
    authDomain: "facebook-clone-844bd.firebaseapp.com",
    projectId: "facebook-clone-844bd",
    storageBucket: "facebook-clone-844bd.appspot.com",
    messagingSenderId: "511169551031",
    appId: "1:511169551031:web:4b7d53db470188bdba4b32"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
var auth = firebaseApp.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider }

export default db;