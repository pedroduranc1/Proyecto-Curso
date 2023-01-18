import { MotiView } from "moti";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { gris_oscuro } from "../constant/colores";
import { useModalStore } from "../store/modalStore";

const Card = ({ imagen, nombre, bloqueado, navegacion, index }) => {
  const changeModalState = useModalStore((state) => state.changeModalState);

  return (
    <TouchableOpacity
      onPress={() =>
        bloqueado === true ? changeModalState() : navegacion.navigate(nombre)
      }
      
      className={`flex w-[47%] mt-5 items-center py-4 bg-white rounded-md ${
        index === 1 || index === 3 ? "ml-5" : ""
      }`}
    >
      <MotiView
      from={{opacity:0}}
      animate={{opacity:1}}
      delay={index * 150}
      >
        <Image source={imagen} resizeMode="contain" className="w-32 h-32" />
        <View className="w-full pl-1 mt-3">
          <Text
            className="font-bold text-start"
            style={{ fontSize: 10, color: gris_oscuro }}
          >
            {nombre}
          </Text>
        </View>
        {
          bloqueado === true &&<Image 
          className="absolute bottom-0 right-0 w-5 h-5"
          resizeMode="contain"
          source={require('../assets/candado.png')} />
        }
        
      </MotiView>
    </TouchableOpacity>
  );
};

export default Card;
