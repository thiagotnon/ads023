import React from 'react';
import DrawerNavigator from './components/DrawNavigator';
import StackNavigator from './components/StackNavigator';
import TabNavigator from './components/TabNavigator';

export default function App() {
  const opcao = 3;

  return (
    <>
      {(opcao == 1) && (<StackNavigator />)}
      {(opcao == 2) && (<TabNavigator />)}
      {(opcao == 3) && (<DrawerNavigator />)}
    </>
  );
}
