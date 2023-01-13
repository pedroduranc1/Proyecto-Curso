import {Text, View } from 'react-native'
import React from 'react'
import TopTabNav from '../navigation/TopTabNav'
import { blanco, gris_oscuro, rojo } from '../constant/colores'

const MainScreen = () => {
  return (
    <>
      <View 
      style={{backgroundColor:blanco}}
      className="flex w-full justify-end h-20">
        <Text 
        style={{color:gris_oscuro}}
        className={`pl-[8%] font-bold text-md`}>Hola,<Text style={{color:rojo }}> Pedro</Text></Text>
      </View>
      <TopTabNav/>
    </>
  )
}

export default MainScreen