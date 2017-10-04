/* jshint esversion:6 */
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { darkTeal, lightTeal, white } from '../../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function EmptyList () {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name ='cards' size={200} style={styles.icon} />
      <Text style={[styles.text, {fontSize: 30}]}>
        No Decks Available.
      </Text>
      <Text style={styles.text}>
        Add a deck to get started.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    opacity: 0.8,
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: darkTeal,
  },
  icon: {
    marginTop: 20,
    opacity: 0.8,
    color: darkTeal,
  }
});
