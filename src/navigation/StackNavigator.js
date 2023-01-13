import React from 'react'

//NAVEGACION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//SCREENS
import { MainNav } from '../constant/DataNav';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {
                MainNav.map(({Nombre,Componente})=> <Stack.Screen key={Nombre} name={Nombre} component={Componente} />)
            }
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default StackNavigator