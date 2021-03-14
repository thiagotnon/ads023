import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row' }}>
        <Icon name='home' />
        <Text> Default</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="home" size={30} />
        <Text> Size 30</Text>
      </View>
      <Icon name="home" size={30} color="red" />
    </View>
  );
}
