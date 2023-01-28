//login with firebase and reactquery?

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./db";

export const Login = async ({ email, password }) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response
};





