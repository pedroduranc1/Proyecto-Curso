import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { azul, azul_oscuro, blanco, rojo } from "../constant/colores";

const RegistroScreen = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: azul,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="flex h-screen w-screen items-center"
    >
      <View className="flex items-center mt-[20%]">
        <Image
          className="w-[150px] h-[150px]"
          source={require("../assets/l-r-icon.png")}
        />
        <Text className="text-white font-semibold text-sm mt-4">
          ¡Bienvenido a la App!
        </Text>
      </View>
      <View className="w-full mt-[50px] px-8 h-full">
        <TextInput
          className="w-full h-12 px-5 rounded-xl bg-white"
          placeholder="Nombre"
        />
        <TextInput
          className="w-full h-12 px-5 rounded-xl mt-4 bg-white"
          placeholder="Ingresa tu correo electrónico"
        />
        <TextInput
          className="w-full h-12 px-5 rounded-xl mt-4 bg-white"
          placeholder="Contraseña"
        />

        <TouchableOpacity
          style={{ backgroundColor: rojo }}
          className="w-full h-12 rounded-lg flex items-center justify-center mt-6"
        >
          <Text className="text-white font-bold ">Registrarme</Text>
        </TouchableOpacity>

        <View className="w-full flex flex-row justify-between items-center mt-8">
          <View className="bg-white w-[25%] h-[1px]" />
          <Text className="text-white mx-4">O continuar con</Text>
          <View className="bg-white w-[25%] h-[1px]" />
        </View>

        <View className="w-full flex flex-row justify-between items-center mt-4">
          <TouchableOpacity
            style={{ backgroundColor: blanco }}
            className="w-[47%] p-3 items-center justify-center rounded-lg"
          >
            <Image
              className="w-5 h-5"
              source={require("../assets/google.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: azul_oscuro }}
            className="w-[47%] p-3 items-center justify-center rounded-lg"
          >
            <Image
              className="w-5 h-5"
              source={require("../assets/facebook.png")}
            />
          </TouchableOpacity>
        </View>
        <View className="flex w-full mt-10 justify-center items-center">
                <TouchableOpacity
                    onPress={()=> navigation.replace('Login')}
                >
                    <Text className="text-white font-bold">¿Ya tienes una cuenta? Ingresa aquí</Text>
                </TouchableOpacity>
            </View>
      </View>
    </View>
  );
};

export default RegistroScreen;
