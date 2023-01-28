import React, { useState } from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { azul, rojo, blanco, azul_oscuro } from "../constant/colores";

import { useUserLogin } from "../hooks/useUserLogin";

const LoginScreen = ({ navigation }) => {
 
  const [Usuario, setUsuario] = useState("");
  const [Password, setPassword] = useState("");

  const iniciarSesion = async (email,password) => {
    const {uid} = await useUserLogin({email,password})
    if(uid){
      navigation.navigate("Home")
    }
  }

  return (
    <View
      style={{
        backgroundColor: azul,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="items-center flex-1 w-screen h-screen"
    >
      <View className="flex items-center mt-[20%]">
        <Image
          className="w-[150px] h-[150px]"
          source={require("../assets/l-r-icon.png")}
        />
        <Text className="mt-4 text-sm font-semibold text-white">
          ¡Bienvenido de nuevo a la App!
        </Text>
      </View>
      <View className="w-full mt-[50px] px-8 h-full">
        <TextInput
          className="w-full h-12 px-5 bg-white rounded-xl"
          placeholder="Ingresa tu correo electronico"
          onChangeText={(user)=>setUsuario(user)}
          value={Usuario}
        />
        <TextInput
          className="w-full h-12 px-5 mt-4 bg-white rounded-xl"
          placeholder="Contraseña"
          onChangeText={(pass)=>setPassword(pass)}
          value={Password}
        />

        <TouchableOpacity className="flex items-end mt-4">
          <Text className="font-bold text-white">Recuperar contraseña</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: rojo }}
          className="flex items-center justify-center w-full h-12 mt-6 rounded-lg"
          onPress={() => iniciarSesion(Usuario,Password)}
        >
          <Text className="font-bold text-white ">Iniciar sesión</Text>
        </TouchableOpacity>

        <View className="flex flex-row items-center justify-between w-full mt-8">
          <View className="bg-white w-[25%] h-[1px]" />
          <Text className="mx-4 text-white">O continuar con</Text>
          <View className="bg-white w-[25%] h-[1px]" />
        </View>

        <View className="flex flex-row items-center justify-between w-full mt-4">
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

        <View className="flex items-center justify-center w-full mt-10">
          <TouchableOpacity onPress={() => navigation.replace("Registro")}>
            <Text className="font-bold text-white">
              ¿No tienes cuenta? Regístrate aquí
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
