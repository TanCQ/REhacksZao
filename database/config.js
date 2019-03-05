import Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBNhyP0HctUAcb5dGcwAGl4KkaRmBc5iag",
    authDomain: "rehacks-61bdb.firebaseapp.com",
    databaseURL: "https://rehacks-61bdb.firebaseio.com",
    projectId: "rehacks-61bdb",
    storageBucket: "rehacks-61bdb.appspot.com",
    messagingSenderId: "560434783927"
};

let app = Firebase.initializeApp(config);
export const db = app.database();
