import {Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopTabNav from '../navigation/TopTabNav'

import { blanco, gris_oscuro, rojo } from '../constant/colores'
import { auth } from '../api/db'
import { userFindUser } from '../hooks/userFindUser'

const MainScreen = ({navigation}) => {
  const [Nombre, setNombre] = useState("Usuario")

  if(auth.currentUser.uid === undefined){
    navigation.navigate("Login")
  }

  const setInfo = async () =>{
    const ID = auth.currentUser.uid;
    const userInfo = await userFindUser({ID})
    let user = userInfo
    setNombre(user.Nombre)
  }
 
  useEffect(() => {
    setInfo()
  }, [])
  
  

  return (
    <>
      <View 
      style={{backgroundColor:blanco}}
      className="flex w-full justify-end h-20">
        <Text 
        style={{color:gris_oscuro}}
        className={`pl-[8%] font-bold text-md`}>Hola,<Text style={{color:rojo }}> {Nombre}</Text></Text>
      </View>
      <TopTabNav/>
    </>
  )
}

export default MainScreen