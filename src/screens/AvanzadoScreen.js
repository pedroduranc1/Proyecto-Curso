import { View,FlatList } from 'react-native'
import React from 'react'
import { gris_claro } from '../constant/colores'
import MainInfo from '../components/MainInfo'
import Card from '../components/Card'
import { AdvancedCards } from '../constant/DataNav'

const AvanzadoScreen = ({navigation}) => {
  return (
    <View 
        style={{backgroundColor:gris_claro}}
        className="flex-1 w-screen h-screen px-[8%]">
      <MainInfo/>
      <FlatList
          data={AdvancedCards}
          numColumns={2}
          renderItem={({ item , index}) => (
            <Card
              index={index}
              imagen={item.Imagen}
              nombre={item.Nombre}
              bloqueado={item.Bloqueado}
              navegacion={navigation}
            />
          )}
          keyExtractor={(item) => `item-${item.Nombre}`}
        />
    </View>
  )
}

export default AvanzadoScreen