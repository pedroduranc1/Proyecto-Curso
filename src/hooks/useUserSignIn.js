import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../api/db"

export const useUserSignIn = async ({email,pass}) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        return userCredential.user;
    } catch (error) {
        const errorMessage = error.message;
        return errorMessage;
    }
}