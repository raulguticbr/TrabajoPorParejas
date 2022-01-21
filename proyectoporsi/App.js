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
     tabBarOptions={{
      activeTintColor: '#000',
      activeBackgroundColor: '#CD5C5C',
      inactiveTintColor: '#FFF',
      inactiveBackgroundColor: '#F08080',
    }}
    screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Lista de frutas') {
                iconName = focused ? 'wind' : 'menu';
              } else if (route.name === 'Crear frutas') {
                iconName = focused ? 'crosshair' : 'divide-circle';
              }
              
              return <Icons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'pink',
            tabBarInactiveTintColor: 'black',
          })}>
    <Tab.Screen name="Lista de frutas" component={listaStack}  options={{ headerStyle: { backgroundColor: '#F08080' },headerTitleAlign: 'center'}}/>
    <Tab.Screen name="Crear frutas" component={crearStack}  options={{ headerStyle: { backgroundColor: '#F08080' },headerTitleAlign: 'center'}}/>
    </Tab.Navigator>
    </NavigationContainer>


  );

  
 }