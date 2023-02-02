import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { azul, gris, gris_oscuro } from "../constant/colores";
import { useUserStore } from "../store/userStore";
import { BottomSheet } from "react-native-btr";
import BottomSheetPerfil from "../components/BottomSheetPerfil";

const EditarPerfil = ({navigation}) => {
  const [Visible, setVisible] = useState(false)

  const btsv = () => {
    setVisible(!Visible);
  }
  const User = useUserStore(state => state.user)
  return (
    <View className="w-[100%] h-[100%] px-8 bg-white">
      <View className="mt-[15%] flex flex-row justify-between">
        <TouchableOpacity
          onPress={()=> navigation.navigate("Perfil")}
        >
          <Text style={{ color: gris_oscuro }} className="font-bold">
            Cancelar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: azul }} className="font-bold">
            Listo
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-col items-center justify-center w-full">
        <Image
          className="w-16 h-16 mt-10"
          source={require("../assets/user.png")}
        />
        <TouchableOpacity className="mt-4"
        onPress={btsv}
        >
          <Text style={{ color: azul }} className="font-bold">
            Editar foto de perfil
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ backgroundColor: gris }}
        className="w-full h-[0.2%] mt-4 rounded-full"
      />
      <View className="flex flex-row mt-4">
        <Text style={{ color: gris_oscuro }} className="font-normal">
          Nombre
        </Text>
        <Text style={{ color: gris_oscuro }}  className="ml-[8%] font-normal">
          {User.name}
        </Text>
      </View>
      <View className="flex flex-row mt-4">
        <Text style={{ color: gris_oscuro }} className="font-normal">
          Email
        </Text>
        <Text style={{ color: gris_oscuro }}  className="ml-[15%] font-normal">
          {User.email}
        </Text>
      </View>
      <BottomSheet
      visible={Visible}
      //setting the visibility state of the bottom shee
      onBackButtonPress={btsv}
      //Toggling the visibility state on the click of the back botton
      onBackdropPress={btsv}
      >
        <BottomSheetPerfil/>
      </BottomSheet>
    </View>
  );
};

export default EditarPerfil;
