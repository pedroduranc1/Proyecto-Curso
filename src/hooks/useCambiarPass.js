import React from 'react'
import { updatePassword } from "firebase/auth";
import { auth } from '../api/db';

const useCambiarPass = async ({user,passActual,passNueva,passRepe,setErrorReg,setLoading}) => {

    if(user.pass !== passActual){
       setErrorReg("tu contraseña actual no coincide")
    }

    if(passNueva !== passRepe){
        setErrorReg("las nuevas contraseñas no coinciden")
        return
    }
    setLoading(true)
    setErrorReg("")

    try {
       const userUpdated = await updatePassword(auth.currentUser, passNueva);
        return userUpdated
    } catch (error) {
        return error.message
    }
}

export default useCambiarPass