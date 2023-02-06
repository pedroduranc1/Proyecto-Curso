import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CompHead from "../components/CompHead";
import { Controller, useForm } from "react-hook-form";
import Input from "../components/Input";
import { azul, gris } from "../constant/colores";
import useCambiarPass from "../hooks/useCambiarPass";
import { useUserStore } from "../store/userStore";
import LoadingModal from "../components/LoadingModal";

const CambiarPass = ({ navigation }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [ErrorReg, setErrorReg] = useState("");
  const [Loading, setLoading] = useState(false)
  const user = useUserStore(state => state.user)

  const onSubmit = async (data) => {
    const passActual = data.passActual
    const passNueva = data.passNueva
    const passRepe = data.passRepe
    const resp = await useCambiarPass({user,passActual,passNueva,passRepe,setErrorReg,setLoading})
    setLoading(false)
    if(resp === undefined){  
      navigation.navigate('Perfil')
    }
  }

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
              error={errors.passActual}
              errorText={errors?.passActual?.message}
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
              error={errors.passNueva}
              errorText={errors?.passNueva?.message}
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
              error={errors.passRepe}
              errorText={errors?.passRepe?.message}
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

        {ErrorReg !== "" && (
          <Text className="mt-3 font-bold text-center text-red-400 text-md">
            {ErrorReg}
          </Text>
        )}

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
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
      {Loading ? <LoadingModal pos={"Registro"} /> : <></>}
    </View>
  );
};

export default CambiarPass;
