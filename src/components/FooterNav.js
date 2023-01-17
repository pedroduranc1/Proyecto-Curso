import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { gris_oscuro } from "../constant/colores";

const MainNav = [
  {
    Nombre: "Inicio",
    Icono: require("../assets/home.png"),
  },
  {
    Nombre: "Test",
    Icono: require("../assets/test.png"),
  },
  {
    Nombre: "Premium",
    Icono: require("../assets/premium.png"),
  },
  {
    Nombre: "Chat",
    Icono: require("../assets/chats.png"),
  },
  {
    Nombre: "Perfil",
    Icono: require("../assets/user.png"),
  },
];

const FooterNav = ({ navigation }) => {
  return (
    <View className="absolute bottom-0 flex flex-row items-center justify-between w-full h-20 space-x-2 bg-white px-7">
      {MainNav.map(({ Nombre, Icono }) => (
        <TouchableOpacity 
        key={Nombre}
        onPress={() => navigation.navigate(Nombre)}
        className="flex items-center justify-center">
          <Image 
            source={Icono}
            className="w-6 h-6 mt-1"
              resizeMode='contain'
          />
          <Text
            className="mt-1 font-bold"
            style={{ fontSize: 12, color: gris_oscuro }}
          >
            {Nombre}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FooterNav;
