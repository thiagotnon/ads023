import React from 'react';
import { View, Text } from 'react-native';

export default function TextScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Text>Texto comum</Text>
      <Text style={{ fontSize: 20, color: 'blue' }}>Texto formatado</Text>
      <Text style={{ fontWeight: 'bold' }}>
        Texto <Text style={{ color: 'red' }}>aninhado</Text>
      </Text>
    </View>
  );
}