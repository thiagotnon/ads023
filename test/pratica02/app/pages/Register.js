import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/styles';

export default function Register({ navigation }) {
  const [name, setName] = React.useState('');
  const [position, setPosition] = React.useState('');

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.label}>NOME</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="eg.:Thiago Natan"
            placeholderTextColor="#4E4E4E"
            value={name}
            onChangeText={(value) => setName(value)}
          />
        </View>

        <Text style={styles.label}>POSIÇÃO</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="eg.:Agente do FBI"
            placeholderTextColor="#4E4E4E"
            value={position}
            onChangeText={(value) => setPosition(value)}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('List')}
        >
          <Text style={styles.textButton}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
