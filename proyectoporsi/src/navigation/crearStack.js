import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import crearScreen from '../containers/crearScreen';

export default function crearStack() {
    return (
  
      <Stack.Navigator>
        <Stack.Screen name="Crear fruta" component={crearScreen} 
        options={{
          headerShown: false,
            
          }}/>
      </Stack.Navigator>
    );
   }