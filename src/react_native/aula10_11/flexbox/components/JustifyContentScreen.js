import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function JustifyContentScreen() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <View style={styles.boxRed}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
        <Text>flex-start</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={styles.boxRed}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
        <Text>center</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Text>flex-end</Text>
        <View style={styles.boxRed}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
      </View>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={styles.boxRed}></View>
        <View style={styles.boxOrange}><Text>space-between</Text></View>
        <View style={styles.boxGreen}></View>
      </View>
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View style={styles.boxRed}></View>
        <View style={styles.boxOrange}><Text>space-around</Text></View>
        <View style={styles.boxGreen}></View>
      </View>
      <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
        <View style={styles.boxRed}></View>
        <View style={styles.boxOrange}><Text>space-evenly</Text></View>
        <View style={styles.boxGreen}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
