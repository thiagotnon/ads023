import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AlignItemsScreen() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-start' }}>
        <View style={styles.boxRed}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
        <Text>flex-start</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.boxRed}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
        <Text>center</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text>flex-end</Text>
        <View style={styles.boxRed}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
      </View>
      <View style={{ alignItems: 'stretch' }}>
        <Text>stretch</Text>
        <View style={{ height: 50, backgroundColor: 'red' }}></View>
        <View style={{ height: 50, backgroundColor: 'orange' }}></View>
        <View style={{ height: 50, backgroundColor: 'green' }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue'
  },
  boxRed: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  boxOrange: {
    height: 50,
    width: 50,
    backgroundColor: 'orange',
  },
  boxGreen: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
});
