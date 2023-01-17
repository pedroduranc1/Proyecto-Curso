import React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import CompHead from "../components/CompHead";
import FooterNav from "../components/FooterNav";
import { gris, gris_oscuro } from "../constant/colores";

const Modales = ({ navigation }) => {
  return (
    <View className="flex-1">
      <CompHead Nombre={"Modales"} navigation={navigation} />
      {/* VIDEO FIELD */}
      <View className="w-full h-[25%] bg-black">
        <Text>VIDEO</Text>
      </View>
      {/* ESTRUCTURA FIELD */}
      <View className="w-full h-[7%] bg-white flex justify-center">
        <Text
          className="ml-10 font-bold"
          style={{ color: gris_oscuro, fontSize: 15 }}
        >
          Presente Simple
        </Text>
      </View>
      {/* EJEMPLOS */}
      <View className="w-full h-[13%] flex justify-center pl-10">
        <Text>Estructura:</Text>
        <Text>Sujeto + verbo</Text>
        <Text>Sujeto + don´t/doesn´t + verbo:</Text>
      </View>
      {/* BTN PRACTICAR */}
      <View className="flex items-center w-full px-10 mt-3">
        <TouchableOpacity
          style={{ backgroundColor: gris }}
          className="flex items-center w-full py-3 rounded-md"
        >
          <Text className="font-bold text-white">Practicar</Text>
        </TouchableOpacity>
      </View>
      <FooterNav navigation={navigation} />
    </View>
  );
};

export default Modales;
