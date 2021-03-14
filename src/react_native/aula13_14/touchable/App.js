import React from 'react';
import { TouchableHighlight, TouchableOpacity, Text, View } from 'react-native';

export default function App() {
  const pressionaTexto = () => {
    alert('Você pressionou o texto!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TouchableHighlight
        style={{
          alignItems: 'center',
          padding: 10,
          backgroundColor: '#DDDDDD',
        }}
        onPress={pressionaTexto}>
        <Text>Toque aqui!</Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          padding: 10,
          backgroundColor: '#DDDDDD',
        }}
        onPress={pressionaTexto}>
        <Text>Toque aqui!</Text>
      </TouchableOpacity>
    </View>
  );
}
