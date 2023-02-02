import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CompHead from "../components/CompHead";
import { Controller, useForm } from "react-hook-form";
import Input from "../components/Input";
import { azul, gris } from "../constant/colores";

const CambiarPass = ({ navigation }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <View className="w-[100%] h-[100%]">
      <CompHead Nombre={"Cambiar contraseña"} />
      <View className="w-full mt-[10%] px-8 h-full">
        <Controller
          defaultValue=""
          name="passActual"
          control={control}
          rules={{
            required: { value: true, message: "Campo es requerido" },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              error={errors.name}
              errorText={errors?.email?.message}
              placeholder="Contraseña actual"
              onChangeText={(text) => onChange(text)}
              value={value}
            />
          )}
        />

        <Controller
          defaultValue=""
          name="passNueva"
          control={control}
          rules={{
            required: { value: true, message: "Campo es requerido" },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              error={errors.name}
              errorText={errors?.email?.message}
              placeholder="Contraseña nueva"
              onChangeText={(text) => onChange(text)}
              value={value}
            />
          )}
        />
        <Controller
          defaultValue=""
          name="passRepe"
          control={control}
          rules={{
            required: { value: true, message: "Campo es requerido" },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              error={errors.name}
              errorText={errors?.email?.message}
              placeholder="Repetir contraseña"
              onChangeText={(text) => onChange(text)}
              value={value}
            />
          )}
        />

        <View className="flex items-end justify-center">
          <TouchableOpacity
            className="mt-2"
            onPress={()=> navigation.navigate("Restablecer Pass")}
          >
            <Text
            style={{color:azul}}
            className="text-sm"
            >Olvide mi contraseña</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{ backgroundColor: azul }}
          className="flex items-center w-full py-3 mt-4 rounded-md"
        >
          <Text className="font-bold text-white">Cambiar contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: gris }}
          className="flex items-center w-full py-3 mt-2 rounded-md"
          onPress={() => navigation.replace("Perfil")}
        >
          <Text className="font-bold text-white">Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CambiarPass;
