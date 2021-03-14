import React from 'react';
import { Button, Text, View } from 'react-native';

export default function SettingsScreen({ navigation, route }) {
  const { itemId, itemNome } = route.params;
  
  return (
    <View style={{
      flex: 1, justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Configurações!</Text>
      <Text>Item {itemId} - {itemNome}</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
