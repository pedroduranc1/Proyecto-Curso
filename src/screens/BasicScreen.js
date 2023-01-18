import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { gris_claro } from "../constant/colores";
import MainInfo from "../components/MainInfo";
import Card from "../components/Card";
import { BasicsCards } from "../constant/DataNav";

const BasicScreen = ({ navigation }) => {
  return (
    <View
      style={{ backgroundColor: gris_claro }}
      className="w-screen h-screen flex-1 px-[8%]"
    >
      <MainInfo />
      <FlatList
          data={BasicsCards}
          numColumns={2}
          renderItem={({ item , index}) => (
            <Card
              index={index}
              imagen={item.Imagen}
              nombre={item.Nombre}
              bloqueado={item.Bloqueado}
              navegacion={navigation}
            />
          )}
          keyExtractor={(item) => `item-${item.Nombre}`}
        />
    </View>
  );
};

export default BasicScreen;
