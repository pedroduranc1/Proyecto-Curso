import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { gris_oscuro } from '../constant/colores'

const Card = ({imagen,nombre}) => {
  return (
    <TouchableOpacity className="w-[46%] h-[90%] px-5 bg-white rounded-md mt-8 flex items-center">
        <Image 
        className="w-full h-[80%] -mt-1 "
        source={imagen}
        resizeMode={'contain'}
        />

        <View className="flex flex-row justify-between w-full mt-1">
            <Text style={{fontSize:10,color:gris_oscuro}}
                className="font-bold w-[100%]"
            >{nombre}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Card