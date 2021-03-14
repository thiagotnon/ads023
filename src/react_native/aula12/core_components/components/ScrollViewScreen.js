import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function ScrollViewScreen() {
  return (
    <ScrollView style={{ marginHorizontal: 20, backgroundColor: 'orange' }}>
      <Text style={{ fontSize: 42 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
            </Text>
    </ScrollView>
  );
}
