import React from 'react';
import { View, Image } from 'react-native';

export default function ImageScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../assets/react-native-logo.png')}
      />
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
    </View>
  );
}
