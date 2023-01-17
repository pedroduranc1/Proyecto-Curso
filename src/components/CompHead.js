import { View, Text, Platform, Image, TouchableOpacity } from "react-native";
import React from "react";
import { blanco, gris_oscuro } from "../constant/colores";
import { StatusBar } from "expo-status-bar";

const CompHead = ({ Nombre, navigation }) => {
  return (
    <View
      style={{
        backgroundColor: blanco,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="h-[10%] flex flex-row items-center"
    >
      <Text
        style={{ color: gris_oscuro, fontSize: 14 }}
        className="w-full font-bold text-center mt-7"
      >
        {Nombre}
      </Text>
    </View>
  );
};

export default CompHead;
