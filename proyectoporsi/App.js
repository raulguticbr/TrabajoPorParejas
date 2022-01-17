import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import listaStack from './src/navigation/listaStack';
import crearStack from './src/navigation/crearStack';
import Icons from 'react-native-vector-icons/Feather';
const Tab = createBottomTabNavigator();
export default function App() {

  return(
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Lista de frutas') {
                iconName = focused ? 'link' : 'link-2';
              } else if (route.name === 'Información') {
                iconName = focused ? 'message-circle' : 'message-square';
              }
              
              return <Icons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
          })}>
    <Tab.Screen name="Lista de frutas" component={listaStack}/>
    <Tab.Screen name="Crear frutas" component={crearStack}/>
    </Tab.Navigator>
    </NavigationContainer>


  );

 }