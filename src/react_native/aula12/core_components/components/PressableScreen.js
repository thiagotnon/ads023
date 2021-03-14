import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export default function PressableScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'white' : 'skyblue',
          },
        ]}>
        <Text style={{ padding: 16 }}>Pressione</Text>
      </Pressable>
      <Pressable>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
      </Pressable>
    </View>
  );
}
