import {Text, View } from 'react-native'
import React, { useEffect } from 'react'
import TopTabNav from '../navigation/TopTabNav'

import { blanco, gris_oscuro, rojo } from '../constant/colores'
import { useUserStore } from '../store/userStore'
const MainScreen = () => {

  const setUser = useUserStore(state => state.setUser)
  const User = useUserStore(state => state.user)
  const setInfo = async () =>{
    setUser()
  }
 
  useEffect(() => {
    setInfo()
  }, [])
  
  

  return (
    <>
      <View 
      style={{backgroundColor:blanco}}
      className="flex justify-end w-full h-20">
        <Text 
        style={{color:gris_oscuro}}
        className={`pl-[8%] font-bold text-md`}>Hola,<Text style={{color:rojo }}> {User ? User.name : "Usuario"}</Text></Text>
      </View>
      <TopTabNav/>
    </>
  )
}

export default MainScreen