import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { gris_oscuro, rojo } from "../constant/colores";

const BottomSheetPerfil = ({LogOut,navigation}) => {
  return (
    <View className="bg-white w-[100%] h-[17%] rounded-t-2xl flex items-center">
      <View
        style={{ backgroundColor: gris_oscuro }}
        className="w-[20%] h-2 rounded-lg mt-2"
      ></View>
      <TouchableOpacity className="w-[90%] mx-[5%] py-3 mt-4 border-b-2 border-gray-200"
        onPress={()=>{
        }}
      >
        <View className="flex flex-row items-center">
          <Image
            className="w-5 h-5 mr-2"
            resizeMode="contain"
            source={require("../assets/image.png")}
          />
          <Text style={{ color: gris_oscuro }} className=" text-md">
            Elegir desde galeria
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
            resizeMode="contain"
            source={require("../assets/trash.png")}
          />
          <Text 
          style={{ color: rojo }} className=" text-md"
          >Eliminar foto de perfil</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BottomSheetPerfil;
