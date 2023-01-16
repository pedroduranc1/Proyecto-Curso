import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CompHead from "../components/CompHead";
import { azul, rojo } from "../constant/colores";

const TestScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: azul }}>
      <View className="items-center flex-1">
        <Image
          className="w-[60%] h-[50%] mt-[20%]"
          source={require("../assets/video.png")}
          resizeMode={"contain"}
        />
        <Text className="mx-5 -mt-20 font-bold text-center text-white">
          Procederemos a hacer una serie de preguntas con diferentes tipos de
          estructuras del lenguaje respondelas lo mejor posible
        </Text>

        <TouchableOpacity
          className="w-full"
        >
          <View 
          style={{backgroundColor:rojo}}
          className="py-3 mx-5 mt-10 rounded-md"
          >
            <Text className="font-bold text-center text-white">Realizar Test</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TestScreen;
