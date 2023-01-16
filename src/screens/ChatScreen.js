import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { azul, rojo } from "../constant/colores";

const ChatScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: azul }}>
      <View className="items-center flex-1">
        <Image
          className="w-[50%] h-[50%] mt-[20%]"
          source={require("../assets/chatIcon.png")}
          resizeMode={"contain"}
        />
        <Text 
        style={{fontSize:17}}
        className="mx-5 -mt-24 font-bold text-center text-white">
          Chatea con un maestro
        </Text>
        <Text 
        style={{fontSize:14}}
        className="mx-5 mt-3 text-center text-white">
          Aclara todas tus dudas, desde la comodidad de tu casa
        </Text>

        <TouchableOpacity className="w-full">
          <View
            style={{ backgroundColor: rojo }}
            className="py-3 mx-5 mt-10 rounded-md"
          >
            <Text className="font-bold text-center text-white">
              Ir al chat
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
