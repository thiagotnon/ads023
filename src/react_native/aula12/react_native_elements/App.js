import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Avatar, Button, CheckBox, Header, Icon, Input } from 'react-native-elements';

export default function App() {
  return (
    <SafeAreaProvider>
      <Header
        leftComponent={{ text: 'TÍTULO', style: { color: '#fff' } }}
        rightComponent={{ icon: 'dehaze', color: '#fff' }}
      />
      <View style={{ padding: 16 }}>
        <Avatar
          rounded
          source={{
            uri: 'https://www.gravatar.com/avatar/0?d=mp&amp;f=y'
          }}
        />
        <Icon name="home" />
        <Input placeholder="Digite algo" />
        <Button title="Botão" />
        <CheckBox title="CheckBox" checked={true} />
      </View>
    </SafeAreaProvider>
  );
}
