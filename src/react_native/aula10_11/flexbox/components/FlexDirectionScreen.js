import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FlexDirectionScreen() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <Text>column</Text>
        <View style={styles.boxRed}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.boxRed}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
        <Text>row</Text>
      </View>
      <View style={{ flexDirection: 'row-reverse' }}>
        <View style={styles.boxRed}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
        <Text>row-reverse</Text>
      </View>
      <View style={{ flexDirection: 'column-reverse' }}>
        <View style={styles.boxRed}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
        <Text>column-reverse</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'aliceblue',
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
