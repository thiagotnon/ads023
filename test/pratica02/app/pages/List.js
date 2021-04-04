import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/styles';

export default function List() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text>List</Text>
      </View>
    </View>
  );
}
