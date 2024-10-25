import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import PixScreen from './src/screens/PixScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen 
       name="Home" 
       component={HomeScreen} 
       options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
        ),
      }} 
    />
    <Tab.Screen 
      name="Pix" 
      component={PixScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="compare-arrows" color={color} size={size} />
        ),
      }} 
    />
    </Tab.Navigator>
  </NavigationContainer>
  );
}