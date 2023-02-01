import { doc, getDoc } from "firebase/firestore/lite"
import { dbFirestore } from "../api/db"

export const userFindUser = async ({ID}) => {
    const userRef = doc(dbFirestore,'users',ID)
    const userSnap = await getDoc(userRef)

    if(userSnap.exists()){ 
        const {ID,name,pass,email} = userSnap.data()
        let userInfo = {
            ID,
            name,
            pass,
            email
        }
        return userInfo
    }else{
        console.log('No existe ningun registro')
    }
}