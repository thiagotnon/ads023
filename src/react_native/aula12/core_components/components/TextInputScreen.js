import React from 'react';
import { View, TextInput } from 'react-native';

export default function TextInputScreen() {
  return (
    <View style={{ padding: 16 }}>
      <TextInput></TextInput>
      <TextInput style={{ borderWidth: 1 }} placeholder="Digite algo" />
      <TextInput
        style={{ height: 40 }}
        value="Somente leitura"
        editable={false}
      />
      <TextInput style={{ height: 40 }} value="333" keyboardType="number-pad" />
    </View>
  );
}
