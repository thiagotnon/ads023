import React from 'react';
import { View } from 'react-native';

export default function ViewScreen() {
  return (
    <View style={{ flexDirection: 'row', height: 100, padding: 16 }}>
      <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
      <View style={{ backgroundColor: 'red', flex: 0.5 }} />
    </View>
  );
}
