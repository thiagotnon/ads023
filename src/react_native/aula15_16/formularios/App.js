import React from 'react';

import FormComum from './components/FormComum';
import FormFormik from './components/FormFormik';
import FormRHF from './components/FormRHF';

export default function App() {
  const opcao = 1;

  return (
    <>
      {(opcao == 1) && (<FormComum />)}
      {(opcao == 2) && (<FormFormik />)}
      {(opcao == 3) && (<FormRHF />)}
    </>
  );
}
