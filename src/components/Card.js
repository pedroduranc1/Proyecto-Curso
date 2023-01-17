import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { gris_oscuro } from "../constant/colores";

const Card = ({ imagen, nombre, navegacion,index }) => {
  return (
    <TouchableOpacity
      onPress={() => navegacion.navigate(nombre)}
      className={`flex w-[47%] mt-5 items-center py-4 bg-white rounded-md ${index === 1 || index === 3 ? 'ml-5': ''}`}
    >
      <Image source={imagen} resizeMode="contain" className="w-32 h-32" />
      <View className="w-full pl-6 mt-3">
        <Text className="font-bold text-start" style={{ fontSize: 10, color:gris_oscuro}}>
          {nombre}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
