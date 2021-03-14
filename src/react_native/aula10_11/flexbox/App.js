import React from 'react';

import FlexScreen from './components/FlexScreen';
import FlexDirectionScreen from './components/FlexDirectionScreen';
import JustifyContentScreen from './components/JustifyContentScreen';
import AlignItemsScreen from './components/AlignItemsScreen';

export default function App() {
  const opcao = 1;

  return (
    <>
      {(opcao == 1) && (<FlexScreen />)}
      {(opcao == 2) && (<FlexDirectionScreen />)}
      {(opcao == 3) && (<JustifyContentScreen />)}
      {(opcao == 4) && (<AlignItemsScreen />)}
    </>
  );
}
