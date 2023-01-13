import React from 'react'
import { Text, View} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { blanco, gris_oscuro, rojo } from '../constant/colores';
import { TopNav } from '../constant/DataNav';


const Tab = createMaterialTopTabNavigator();

const TopTabNav = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
      tabBarShowLabel:false,
      tabBarIndicatorStyle:{backgroundColor: rojo,height:4},
      tabBarItemStyle:{
        backgroundColor: blanco,
        alignItems:'flex-start',
        paddingLeft:50,
        display:'flex',
        width:110
      },
  }}
    >
      {TopNav.map(({Nombre,Componente,Size})=> <Tab.Screen
      options={{
        tabBarIcon: ({focused})=> <View 
        key={Nombre}
        className="h-10 flex items-center justify-center">
            <Text 
            style={{color:gris_oscuro}}
            className={`${focused ? "font-bold" : ""} 
            ${Size} h-8 text-center ${focused ? 'border-b-4' : ''} 
            ${focused ? 'border-red-600' : ''}`}
            >{Nombre}</Text>
        </View>
      }}
      name={Nombre} component={Componente} />)}
    </Tab.Navigator>
  )
}

export default TopTabNav