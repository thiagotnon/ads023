import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/styles';

export default function Login() {
  const [inputUser, setInputUser] = React.useState('');
  const [inputPass, setInputPass] = React.useState('');
  const [hidePass, setHidePass] = React.useState(true);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.titleArea}>
          <Text style={styles.title}>Olá.{'\n'}Bem-vindo(a)</Text>
        </View>
        <Text style={styles.label}>EMAIL</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="eg.:email@email.com"
            placeholderTextColor="#4E4E4E"
            value={inputUser}
            onChangeText={(value) => setInputUser(value)}
          />
        </View>
        <Text style={styles.label}>SENHA</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="eg.:1dsa$23413"
            placeholderTextColor="#4E4E4E"
            autoCompleteType="password"
            value={inputPass}
            onChangeText={(value) => setInputPass(value)}
            secureTextEntry={hidePass}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setHidePass(!hidePass)}
            disabled={inputPass ? false : true}
          >
            <Ionicons
              name={hidePass ? 'eye' : 'eye-off'}
              color={inputPass ? '#00a5f4' : '#4E4E4E'}
              size={25}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
