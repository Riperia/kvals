import firebase from "firebase/compat/app";
import "firebase/compat/database";

let config = {
    apiKey: "AIzaSyC0Y1kb6NejFhZLZo9q6JK8HtkBud6bX5Q",
    databaseURL:
        "https://kvalification-dbe8d-default-rtdb.europe-west1.firebasedatabase.app/",
    authDomain: "kvalification-dbe8d.firebaseapp.com",
    projectId: "kvalification-dbe8d",
    storageBucket: "kvalification-dbe8d.appspot.com",
    messagingSenderId: "326967959874",
    appId: "1:326967959874:web:6160a45df6f9fc8165e8db",
    measurementId: "G-LE12LFB5MC"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.database();
