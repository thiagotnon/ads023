import React from 'react';

import FlatListScreen from './components/FlatListScreen';
import SectionListScreen from './components/SectionListScreen';

export default function App() {
  const opcao = 1;

  return (
    <>
      {(opcao == 1) && (<FlatListScreen />)}
      {(opcao == 2) && (<SectionListScreen />)}
    </>
  );
}
