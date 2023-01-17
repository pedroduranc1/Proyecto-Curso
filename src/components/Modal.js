import React from "react";
import { View, Text,TouchableOpacity,Image } from "react-native";
import { azul, azul_oscuro } from "../constant/colores";

const Modal = () => {
  return (
    <View className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black/70">
      <View className="w-[85%] opacity-100 bg-white px-10 flex items-center rounded-md h-[30%]">
        <Image
          className="absolute w-20 h-20 top-5"
          resizeMode="contain"
          source={require('../assets/error.png')}
        />
        <Text className="absolute text-center bottom-20">
          Debes Completar la actividad desbloqueada para continuar con esta
        </Text>
        <TouchableOpacity 
        style={{backgroundColor:azul}}
        className="absolute flex items-center justify-center w-full py-3 rounded-md bottom-5">
          <Text className="font-bold text-white">Entendido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Modal;
