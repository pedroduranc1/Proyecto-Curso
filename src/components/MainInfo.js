import { View, Text } from "react-native";
import React from "react";
import { gris_claro, gris_oscuro } from "../constant/colores";

const MainInfo = () => {
  return (
    <View style={{ backgroundColor: gris_claro }} className="mt-5">
      <Text style={{ color: gris_oscuro }} className="font-bold text-xl">
        Categorias
      </Text>
      <Text 
      style={{ color: gris_oscuro,fontSize:10}}
      className="font-normal mt-1">
        Debes completar el primer tema para desbloquear el siguiente contenido
      </Text>
    </View>
  );
};

export default MainInfo;
