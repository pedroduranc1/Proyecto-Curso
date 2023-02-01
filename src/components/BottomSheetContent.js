import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { gris_oscuro, rojo } from "../constant/colores";

const BottomSheetContent = ({LogOut}) => {
  return (
    <View className="bg-white w-[100%] h-[17%] rounded-t-2xl flex items-center">
      <View
        style={{ backgroundColor: gris_oscuro }}
        className="w-[20%] h-2 rounded-lg mt-2"
      ></View>
      <TouchableOpacity className="w-[90%] mx-[5%] py-3 mt-4 border-b-2 border-gray-200">
        <View className="flex flex-row items-center">
          <Image
            className="w-5 h-5 mr-2"
            source={require("../assets/key.png")}
          />
          <Text style={{ color: gris_oscuro }} className=" text-md">
            Cambiar contraseña{" "}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="w-[90%] mx-[5%] py-3"
      onPress={LogOut} 
      >

        <View 
        className="flex flex-row items-center"
        >
          <Image
            className="w-5 h-5 mr-2"
            source={require("../assets/logout.png")}
          />
          <Text 
          style={{ color: rojo }} className=" text-md"
          >Salir de sesión</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BottomSheetContent;
