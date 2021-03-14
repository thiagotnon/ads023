import React from 'react';
import { Button, View } from 'react-native';

export default function ButtonScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Button title="Default" />
      <Button title="Success" color="green" />
      <Button title="Desativado" disabled />
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Button title="Left" />
        <Button title="Right" />
      </View>
    </View>
  );
}
