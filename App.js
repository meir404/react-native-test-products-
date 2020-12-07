import React, { useState, useEffect } from 'react';
import HomePage from './components/home';
import ProductPage from './components/product'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Product" component={ProductPage} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
