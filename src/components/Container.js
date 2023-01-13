import React from 'react'

import { View,Platform } from 'react-native'
import { blanco } from '../constant/colores'
import { StatusBar } from 'expo-status-bar'

const Container = () => {
  return (
    <View style={{ backgroundColor: blanco,paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10}} 
    />
  )
}

export default Container