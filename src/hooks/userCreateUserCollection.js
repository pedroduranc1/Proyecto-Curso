import { doc, setDoc } from "firebase/firestore/lite";
import { dbFirestore } from "../api/db";

export const useCreateUserCollection = async ({ID,userData}) =>{
    try {
        await setDoc(doc(dbFirestore, "users", ID), {
            ID,
            ...userData,
        });
        return console.log(`User with ID : ${ID} Created`)
    } catch (err) {
        return console.log(err);
    }
}



