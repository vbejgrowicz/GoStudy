/* jshint esversion:6 */
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { darkTeal, white } from '../../utils/colors';

export default function DeckTile ({ title, size }) {
  return (
    <View style={styles.tileContainer}>
      <Text style={[styles.text, {fontSize: 22, fontWeight: 'bold'}]}>
        {title}
      </Text>
      <Text style={[styles.text, {fontSize: 22}]}>
        {size} Questions
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tileContainer: {
    padding: 25,
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  text: {
    textAlign: 'center',
    color: darkTeal,
  }
});
