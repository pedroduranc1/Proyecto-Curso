import { Image, Text, View } from "react-native";

//Imports
import { BottomNav } from "../constant/DataNav";

//Libs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Modal from "../components/Modal";

import { useModalStore } from "../store/modalStore";
import { useState } from "react";

const Tab = createBottomTabNavigator();


function BottomTabNav() {

  const modal = useModalStore((state)=> state.modal)

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 5,
          },
          tabBarShowLabel: false,
        }}
      >
        {BottomNav.map(
          ({
            Nombre,
            Componente,
            ColorHover,
            ColorNormal,
            IconoHover,
            IconoNormal,
          }) => (
            <Tab.Screen
              options={{
                tabBarIcon: ({ focused }) => (
                  <View className="items-center justify-center">
                    <Image
                      className="w-6 h-6 mt-1"
                      resizeMode="contain"
                      source={focused ? IconoHover : IconoNormal}
                    />
                    <Text
                      className="mt-1 font-bold text-center"
                      style={{
                        color: focused ? ColorHover : ColorNormal,
                        fontSize: 10,
                      }}
                    >
                      {Nombre}
                    </Text>
                  </View>
                ),
              }}
              key={Nombre}
              name={Nombre}
              component={Componente}
            />
          )
        )}
      </Tab.Navigator>
      {modal === true ?  <Modal/> : <></>}
      
    </>
  );
}

export default BottomTabNav;
