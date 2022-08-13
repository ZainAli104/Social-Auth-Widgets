import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  signInWithPopup,
  GithubAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GoogleAuthProvider,
  OAuthProvider
} from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcWBwSKS3D168h5OO5XtfVutim1ec2s0k",
  authDomain: "social-auth-8fc92.firebaseapp.com",
  projectId: "social-auth-8fc92",
  storageBucket: "social-auth-8fc92.appspot.com",
  messagingSenderId: "888658485623",
  appId: "1:888658485623:web:ff7644da29ca76f6aa4172",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const users = collection(db, "Users");

export {
  app,
  db,
  users,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GithubAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GoogleAuthProvider,
  OAuthProvider
};
