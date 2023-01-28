import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { auth, dbFirestore } from "./db";

export var userId = "";

export const userSignIn = (email, pass, userData) => {
  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      userId = user.uid;
      userCreateCollection(userId, userData);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export const userCreateCollection = (ID, userData) => {
  setDoc(doc(dbFirestore, "users", ID), {
    ID,
    ...userData,
  })
    .then()
    .catch((err) => console.log(err));
};

