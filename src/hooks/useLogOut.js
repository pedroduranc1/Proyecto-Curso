import { signOut } from "firebase/auth";
import { auth } from "../api/db";

export const useLogOut = async (navigation) => {
  try {
    await signOut(auth);

    navigation.replace("Login");
  } catch (error) {
    return error;
  }
};
