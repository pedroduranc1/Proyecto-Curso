import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { gris_claro } from "../constant/colores";
import MainInfo from "../components/MainInfo";
import Card from "../components/Card";

const BasicScreen = () => {
  return (
    <View
      style={{ backgroundColor: gris_claro }}
      className="w-screen h-screen flex-1 px-[8%]"
    >
      <MainInfo />
      <View
        className="h-[30%]"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Card 
        imagen={require('../assets/tiemposVerbales.png')}
        nombre={'Tiempos Verbales'}
        />
        <Card 
        imagen={require('../assets/Modales.png')}
        nombre={'Modales'}
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
        imagen={require('../assets/otrasEstructuras.png')}
        nombre={'Otras Estructuras'}
        />
        <Card 
        imagen={require('../assets/vocabulario.png')}
        nombre={'Vocabulario'}
        />
      </View>
    </View>
  );
};

export default BasicScreen;
