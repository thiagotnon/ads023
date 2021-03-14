import React, { useState } from 'react';
import { Button, Pressable, Switch, Text, TextInput, View } from 'react-native';

export default function App() {
  const pressionaBotao = () => {
    alert('Você pressionou o botão!');
  };

  const pressionaTexto = () => {
    alert('Você manteve pressionado mais que 500ms!');
  };

  const [texto, setTexto] = useState('');
  const ficaMaiusculo = (e) => {
    setTexto(e.toUpperCase());
  };

  const [valor, setValor] = useState(true);
  const mudaValor = () => {
    setValor((previousState) => !previousState);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Clique-me" onPress={pressionaBotao} />

      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#F9F9F9' : '#DDDDDD',
          },
          { alignItems: 'center', padding: 10 },
        ]}
        onLongPress={pressionaTexto}>
        <Text>Toque aqui!</Text>
      </Pressable>

      <TextInput
        style={{ padding: 10 }}
        value={texto}
        onChangeText={ficaMaiusculo}
        placeholder="Digite algo"
      />

      <Switch
        value={valor}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={valor ? '#6495ed' : '#ffffff'}
        onValueChange={mudaValor}
      />
    </View>
  );
}
