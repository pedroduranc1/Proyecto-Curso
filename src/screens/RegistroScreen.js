import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

//COLORES
import { azul, azul_oscuro, blanco, rojo } from "../constant/colores";

//LIBS
import { useUserSignIn } from "../hooks/useUserSignIn";
import { useCreateUserCollection } from "../hooks/userCreateUserCollection";

const RegistroScreen = ({ navigation }) => {
  const [Nombre, setNombre] = useState("");
  const [Usuario, setUsuario] = useState("");
  const [Password, setPassword] = useState("");

  const registro = async (email, pass, nombre) => {
    const userCred = await useUserSignIn({ email, pass, nombre });
    let userData = {
      ID: userCred.uid,
      Nombre: nombre,
      Email: email,
      Password: pass,
    };

    const { ID } = userData;
    await useCreateUserCollection({ ID, userData });
    navigation.navigate("Home");
  };

  return (
    <View
      style={{
        backgroundColor: azul,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="flex items-center w-screen h-screen"
    >
      <View className="flex items-center mt-[20%]">
        <Image
          className="w-[150px] h-[150px]"
          source={require("../assets/l-r-icon.png")}
        />
        <Text className="mt-4 text-sm font-semibold text-white">
          ¡Bienvenido a la App!
        </Text>
      </View>
      <View className="w-full mt-[50px] px-8 h-full">
        <TextInput
          className="w-full h-12 px-5 bg-white rounded-xl"
          placeholder="Nombre"
          onChangeText={(name) => setNombre(name)}
          value={Nombre}
        />
        <TextInput
          className="w-full h-12 px-5 mt-4 bg-white rounded-xl"
          placeholder="Ingresa tu correo electrónico"
          onChangeText={(email) => setUsuario(email)}
          value={Usuario}
        />
        <TextInput
          className="w-full h-12 px-5 mt-4 bg-white rounded-xl"
          placeholder="Contraseña"
          onChangeText={(pass) => setPassword(pass)}
          value={Password}
        />

        <TouchableOpacity
          onPress={() => registro(Usuario, Password, Nombre)}
          style={{ backgroundColor: rojo }}
          className="flex items-center justify-center w-full h-12 mt-6 rounded-lg"
        >
          <Text className="font-bold text-white ">Registrarme</Text>
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
          <TouchableOpacity onPress={() => navigation.replace("Login")}>
            <Text className="font-bold text-white">
              ¿Ya tienes una cuenta? Ingresa aquí
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegistroScreen;
