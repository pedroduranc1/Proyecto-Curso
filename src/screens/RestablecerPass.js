import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CompHead from "../components/CompHead";
import { Controller, useForm } from "react-hook-form";
import Input from "../components/Input";
import { azul, gris } from "../constant/colores";

const RestablecerPass = ({navigation}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <View>
      <CompHead Nombre={"Reestablecer contraseña"} />
      <View className="w-full mt-[10%] px-8 h-full">
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
          name="passRep"
          control={control}
          rules={{
            required: { value: true, message: "Campo es requerido" },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              error={errors.name}
              errorText={errors?.email?.message}
              placeholder="Repetir Contraseña"
              onChangeText={(text) => onChange(text)}
              value={value}
            />
          )}
        />

        <TouchableOpacity
          style={{ backgroundColor: azul }}
          className="flex items-center w-full py-3 mt-4 rounded-md"
        >
          <Text className="font-bold text-white">Restablecer contraseña</Text>
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

export default RestablecerPass;
