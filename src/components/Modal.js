import { AnimatePresence, MotiView } from "moti";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { azul } from "../constant/colores";
import { useModalStore } from "../store/modalStore";

const Modal = () => {
  const changeModalState = useModalStore((state) => state.changeModalState);

  return (
    <AnimatePresence>
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black/70"
      >
        <View className="w-[85%] opacity-100 bg-white px-10 flex items-center rounded-md h-[30%]">
          <Image
            className="absolute w-20 h-20 top-5"
            resizeMode="contain"
            source={require("../assets/error.png")}
          />
          <Text className="absolute text-center bottom-20">
            Debes Completar la actividad desbloqueada para continuar con esta
          </Text>
          <TouchableOpacity
            onPress={() => changeModalState()}
            style={{ backgroundColor: azul }}
            className="absolute flex items-center justify-center w-full py-3 rounded-md bottom-5"
          >
            <Text className="font-bold text-white">Entendido</Text>
          </TouchableOpacity>
        </View>
      </MotiView>
    </AnimatePresence>
  );
};

export default Modal;
