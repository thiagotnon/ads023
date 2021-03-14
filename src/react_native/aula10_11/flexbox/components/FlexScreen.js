import React from 'react';
import { View } from 'react-native';

export default function FlexScreen() {
  return (
    <>
      <View style={{
        flex: 1,
        backgroundColor: "red"
      }} />
      <View style={{
        flex: 2,
        backgroundColor: "orange"
      }} />
      <View style={{
        flex: 3,
        backgroundColor: "green"
      }} />
    </>
  );
}
