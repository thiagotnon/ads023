import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import List from './pages/List';
import Register from './pages/Register';
import { Ionicons } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles/styles';
const Stack = createStackNavigator();

const customOptions = {
  title: 'My App',
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#4E4E4E',
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={({ navigation }) => ({
            ...customOptions,
            title: 'Lista',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Ionicons name="add-outline" style={styles.plus} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ ...customOptions, title: 'Novo Registro' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
