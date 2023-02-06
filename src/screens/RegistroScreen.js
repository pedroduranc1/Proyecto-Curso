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
import Input from "../components/Input";
import { useForm, Controller } from "react-hook-form";
import LoadingModal from "../components/LoadingModal";
import useHandleError from "../hooks/useHandleError";

const RegistroScreen = ({ navigation }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [ErrorReg, setErrorReg] = useState("");
  const [Loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const userCred = await useUserSignIn(data);
    if (userCred?.uid) {
      setErrorReg("");
      let userData = {
        ID: userCred.uid,
        ...data,
      };
      const { ID } = userData;
      await useCreateUserCollection({ ID, userData });
      setLoading(false);
      navigation.navigate("Home");
    } else {
      let error = userCred;
      useHandleError({ error, setErrorReg, setLoading });
    }
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
        <Controller
          defaultValue=""
          name="name"
          control={control}
          rules={{
            required: { value: true, message: "Nombre es requerido" },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              error={errors.name}
              errorText={errors?.name?.message}
              placeholder="Nombre"
              onChangeText={(text) => onChange(text)}
              value={value}
            />
          )}
        />

        <Controller
          defaultValue=""
          name="email"
          control={control}
          rules={{
            required: { value: true, message: "Email es requerido" },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              error={errors.email}
              errorText={errors?.email?.message}
              placeholder="Email"
              onChangeText={(text) => onChange(text)}
              value={value}
            />
          )}
        />

        <Controller
          defaultValue=""
          name="pass"
          control={control}
          rules={{
            required: { value: true, message: "Password es requerido" },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              error={errors.password}
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

        {Loading ? (
          <></>
        ) : (
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={{ backgroundColor: rojo }}
            className="flex items-center justify-center w-full h-12 mt-6 rounded-lg"
          >
            <Text className="font-bold text-white ">Registrarme</Text>
          </TouchableOpacity>
        )}

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
      {Loading ? <LoadingModal pos={"Registro"} /> : <></>}
    </View>
  );
};

export default RegistroScreen;
