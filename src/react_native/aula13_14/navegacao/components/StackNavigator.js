import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Configurações" component={ SettingsScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
