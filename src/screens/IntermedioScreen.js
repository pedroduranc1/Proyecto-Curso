import { View, Text } from 'react-native'
import React from 'react'
import { gris_claro } from '../constant/colores'
import MainInfo from '../components/MainInfo'
import Card from '../components/Card'

const IntermedioScreen = () => {
  return (
    <View 
        style={{backgroundColor:gris_claro}}
        className="flex-1 w-screen h-screen px-[8%]">
      <MainInfo/>
      <View
        className="h-[30%]"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Card 
        imagen={require('../assets/interferencias.png')}
        nombre={'Interferencias 1'}
        />
        <Card 
        imagen={require('../assets/preguntas.png')}
        nombre={'Preguntas'}
        />
      </View>
      <View
        className="h-[30%] mt-1"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Card 
        imagen={require('../assets/availability.png')}
        nombre={'Availability'}
        />
      </View>
    </View>
  )
}

export default IntermedioScreen