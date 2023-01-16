import { View, Text, Platform, Image } from "react-native";
import React from "react";
import { blanco, gris_oscuro } from "../constant/colores";
import { StatusBar } from "expo-status-bar";

const CompHead = ({Nombre}) => {
  return (
    <View
      style={{
        backgroundColor: blanco,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="h-[10%] flex flex-row items-center"
    >
      <Image 
      source={require('../assets/back.png')}
      className="absolute w-4 h-4 left-7 top-5 mt-7"
      resizeMode="contain"
      />
      <Text 
      style={{color:gris_oscuro}}
      className="w-full text-xl font-bold text-center mt-7">{Nombre}</Text>
    </View>
  );
};

export default CompHead;
