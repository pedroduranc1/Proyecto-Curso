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
import { Controller, useForm } from "react-hook-form";

import { useUserLogin } from "../hooks/useUserLogin";
import Input from "../components/Input";
import LoadingModal from "../components/LoadingModal";
import useHandleError from "../hooks/useHandleError";
import { useUserStore } from "../store/userStore";

const LoginScreen = ({ navigation }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [ErrorReg, setErrorReg] = useState("");
  const [Loading, setLoading] = useState(false);

  const { ID } = useUserStore((state) => state.user);
  //console.log(ID)

  const onSubmit = async (data) => {
    setLoading(true);
    const { email, password } = data;
    const user = await useUserLogin({ email, password });

    if (user?.user?.uid === undefined) {
      let error = user;
      useHandleError({ error, setLoading, setErrorReg });
    } else {
      setErrorReg("");
      setLoading(false);

      navigation.navigate("Home");
    }
  };

  return (
    <>
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
          <Controller
            defaultValue=""
            name="email"
            control={control}
            rules={{
              required: { value: true, message: "Email es requerido" },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                error={errors.name}
                errorText={errors?.email?.message}
                placeholder="Email"
                onChangeText={(text) => onChange(text)}
                value={value}
              />
            )}
          />

          <Controller
            defaultValue=""
            name="password"
            control={control}
            rules={{
              required: { value: true, message: "Password es requerido" },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                error={errors.name}
                errorText={errors?.password?.message}
                placeholder="Password"
                onChangeText={(text) => onChange(text)}
                value={value}
              />
            )}
          />

          {ErrorReg !== "" && (
            <Text className="mt-3 font-bold text-center text-red-400 text-md">
              {ErrorReg}
            </Text>
          )}

          <TouchableOpacity className="flex items-end mt-4">
            <Text className="font-bold text-white">Recuperar contraseña</Text>
          </TouchableOpacity>

          {Loading ? (
            <></>
          ) : (
            <TouchableOpacity
              style={{ backgroundColor: rojo }}
              className="flex items-center justify-center w-full h-12 mt-6 rounded-lg"
              onPress={handleSubmit(onSubmit)}
            >
              <Text className="font-bold text-white ">Iniciar sesión</Text>
            </TouchableOpacity>
          )}

          

          <View className="flex flex-row items-center justify-between w-full mt-4">
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
      {Loading ? <LoadingModal pos={"Login"} /> : <></>}
    </>
  );
};

export default LoginScreen;
