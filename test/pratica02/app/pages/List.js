import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../styles/styles';

export default function List() {
  const list = [
    {
      id: 1,
      name: 'Fox Mulder',
      position: 'FBI Agent',
    },
    {
      id: 2,
      name: 'Dana Scully',
      position: 'FBI Agent',
    },
    {
      id: 3,
      name: 'John Dogget',
      position: 'FBI Agent',
    },
    {
      id: 4,
      name: 'Walter Skinner',
      position: 'FBI Director',
    },
    {
      id: 5,
      name: 'Spender(Cancer Man)',
      position: 'Conspiracyist',
    },
    {
      id: 6,
      name: 'Deep Throat',
      position: 'Informant',
    },
    {
      id: 7,
      name: 'Margaret Scully',
      position: 'Dana`s Mother',
    },
    {
      id: 8,
      name: 'Ringo',
      position: 'Lone Gunmen',
    },
    {
      id: 9,
      name: 'Teena Mulder',
      position: 'Fox`s Mother',
    },
    {
      id: 10,
      name: 'John Fitzgerald Byers',
      position: 'FBI Agent',
    },
    {
      id: 11,
      name: 'Melvin Frohike',
      position: 'The Lone Gunmen',
    },
    {
      id: 12,
      name: 'Marita Covarrubias',
      position: 'Informant',
    },
    {
      id: 13,
      name: 'Sr. X',
      position: 'Secret Man',
    },
  ];
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={list}
          renderItem={({ item }) => (
            <View
              keyExtractor={(item) => item.id.toString()}
              style={styles.list_item}
            >
              <Text style={styles.list_item_position}>{item.position}</Text>
              <Text style={styles.list_item_name}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
