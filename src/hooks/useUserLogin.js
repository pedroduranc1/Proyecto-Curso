import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/db";

export const useUserLogin = async ({email,password}) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in 
       return userCredential.user;
    } catch (error) {
        return error.message;
    }
}
