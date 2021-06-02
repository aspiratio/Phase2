import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHYaC1iAkyD55XykLYh3ucCZKXnd13xt0",
  authDomain: "chat-app-ef690.firebaseapp.com",
  projectId: "chat-app-ef690",
  storageBucket: "chat-app-ef690.appspot.com",
  messagingSenderId: "956695931038",
  appId: "1:956695931038:web:def311b5881069af3c738f",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
