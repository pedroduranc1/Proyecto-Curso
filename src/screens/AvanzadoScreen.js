import { View, Text } from 'react-native'
import React from 'react'
import { gris_claro } from '../constant/colores'
import MainInfo from '../components/MainInfo'
import Card from '../components/Card'

const AvanzadoScreen = () => {
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
        imagen={require('../assets/cultura.png')}
        nombre={'Cultura'}
        />
        <Card 
        imagen={require('../assets/interferencias2.png')}
        nombre={'Interferencias 2'}
        />
      </View>
    </View>
  )
}

export default AvanzadoScreen