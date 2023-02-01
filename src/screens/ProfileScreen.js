import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { blanco, gris_claro, gris_oscuro } from "../constant/colores";
import { useLogOut } from "../hooks/useLogOut";
import { useUserStore } from "../store/userStore";
import { BottomSheet } from 'react-native-btr';
import BottomSheetContent from "../components/BottomSheetContent";


const ProfileScreen = ({navigation}) => {
  const [Visible, setVisible] = useState(false)
  const User = useUserStore(state => state.user)

  const btsv = () => {
    setVisible(!Visible);
  }

  const LogOut = async () => {
    await useLogOut(navigation)
  }

  return (
    <View style={{ flex: 1, backgroundColor: gris_claro }}>
      <View style={{ backgroundColor: blanco }} className="w-full h-[18%] "> 
        <View className="flex flex-row items-center px-10 mt-7">
          <Image
            className="w-16 h-16 mt-10"
            source={require("../assets/user.png")}
          />
          <View className="w-[80%]">
            <View className="flex flex-row items-center justify-between mt-8">
              <Text
                style={{ color: gris_oscuro, fontSize: 15 }}
                className="font-bold"
              >
                {User ? User.name : "Nombre Apellido"}
              </Text>
              <TouchableOpacity
                onPress={btsv}
              >
                <Image
                  className="w-5 h-5"
                  source={require("../assets/ajuste.png")}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View
                style={{ backgroundColor: gris_oscuro }}
                className="w-full py-[2%] mt-2 rounded-md"
              >
                <Text
                  style={{ fontSize: 10 }}
                  className="font-bold text-center text-white"
                >
                  editar perfil
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="px-10">
        <Text className="mt-5 font-bold" style={{ color: gris_oscuro }}>
          Progeso
        </Text>

        <View className="flex items-center justify-center w-full">
          <Image
            className="w-[60%]"
            resizeMode="contain"
            source={require("../assets/perfilProgreso.png")}
          />
          <Text style={{ color: gris_oscuro }} className="-mt-32 font-light">
            Parece quen no tienes progreso
          </Text>
        </View>
      </View>
      <BottomSheet
      visible={Visible}
      //setting the visibility state of the bottom shee
      onBackButtonPress={btsv}
      //Toggling the visibility state on the click of the back botton
      onBackdropPress={btsv}
      >
        <BottomSheetContent LogOut={LogOut} />
      </BottomSheet>
    </View>
  );
};

export default ProfileScreen;
