import React from 'react';

import ViewScreen from './components/ViewScreen';
import TextScreen from './components/TextScreen';
import ImageScreen from './components/ImageScreen';
import TextInputScreen from './components/TextInputScreen';
import ScrollViewScreen from './components/ScrollViewScreen';
import ButtonScreen from './components/ButtonScreen';
import SwitchScreen from './components/SwitchScreen';
import PressableScreen from './components/PressableScreen';

export default function App() {
  const opcao = 1;

  return (
    <>
      {(opcao == 1) && (<ViewScreen />)}
      {(opcao == 2) && (<TextScreen />)}
      {(opcao == 3) && (<ImageScreen />)}
      {(opcao == 4) && (<TextInputScreen />)}
      {(opcao == 5) && (<ScrollViewScreen />)}
      {(opcao == 6) && (<ButtonScreen />)}
      {(opcao == 7) && (<SwitchScreen />)}
      {(opcao == 8) && (<PressableScreen />)}
    </>
  );
}
