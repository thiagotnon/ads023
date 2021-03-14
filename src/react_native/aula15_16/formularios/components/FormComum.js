import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import axios from 'axios';

export default function FormComum() {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const signIn = async () => {
    await axios.post('http:/127.0.0.1/login', {
      username: matricula, password: senha
    }).then(response => {
      alert('Sucesso!');
    }).catch(error => {
      alert('Erro ao autenticar: ' + error.message);
    });
  };

  const onSubmit = () => {
    if (!matricula || !senha)
      alert('Campos são obrigatórios!');
    else if (senha.length < 6)
      alert('Senha menor que 6 caracteres!');
    else signIn();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TextInput style={{ padding: 10 }}
        value={matricula}
        placeholder="Matrícula"
        keyboardType="number-pad"
        onChangeText={(texto) => setMatricula(texto)}
      />
      <TextInput style={{ padding: 10 }}
        value={senha}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(texto) => setSenha(texto)}
      />
      <Button title="Entrar" onPress={onSubmit} />
    </View>
  );
}
