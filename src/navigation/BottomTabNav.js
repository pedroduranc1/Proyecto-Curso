import { Image, Text, View } from 'react-native';

//Imports
import { BottomNav } from '../constant/DataNav';

//Libs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarStyle:{
                position: 'absolute',
                bottom: 0,
                height: 80,
                justifyContent:'center',
                alignItems:'center',
                paddingHorizontal:5
            },
            tabBarShowLabel:false
        }}
    >
      {
        BottomNav.map(({Nombre,Componente,ColorHover,ColorNormal,IconoHover,IconoNormal})=> <Tab.Screen
        options={{
          tabBarIcon: ({focused})=> <View className="items-center justify-center">
              <Image 
              className="w-6 h-6 mt-1"
              source={focused ? IconoHover : IconoNormal }/>
              <Text 
              className="font-bold text-center mt-1"
              style={{color: focused ? ColorHover : ColorNormal,fontSize:10}}>{Nombre}</Text>
          </View>
        }}
        key={Nombre}
        name={Nombre} 
        component={Componente} />)
      }
    </Tab.Navigator>
  );
}

export default BottomTabNav;