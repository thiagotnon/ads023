import React from 'react';
import { View, Switch, Text } from 'react-native';

export default function SwitchScreen() {
  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', paddingBottom: 16 }}>
        <Switch value={false} />
        <Switch value={true} />
      </View>
      <View style={{ flexDirection: 'row', paddingBottom: 16 }}>
        <Switch value={false} disabled />
        <Text>Desativado</Text>
      </View>
      <Switch
        value={true}
        trackColor={{ false: '#999999', true: '#505050' }}
        thumbColor={'#000000'}
      />
    </View>
  );
}
