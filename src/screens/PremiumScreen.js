import React from "react";

import { Image, Text, TouchableOpacity, View } from "react-native";
import { amarillo, azul } from "../constant/colores";

const PremiumScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: azul }}>
      <View className="items-center flex-1">
        <Image
          className="w-[60%] h-[50%] mt-[20%]"
          source={require("../assets/premiumIcon.png")}
          resizeMode={"contain"}
        />
        <Text className="mx-5 font-bold text-center text-white -mt-28">
          ¡Conviértete en premium y goza de más contenido e la app!
        </Text>

        <TouchableOpacity className="w-full">
          <View
            style={{ backgroundColor: amarillo }}
            className="py-3 mx-5 mt-10 rounded-md"
          >
            <Image 
              source={require('../assets/premiumWhite.png')}
              className="absolute w-6 h-6 left-[5%] top-[40%] "
            />
            <Text className="font-bold text-center text-white">
              Obtener
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PremiumScreen;
