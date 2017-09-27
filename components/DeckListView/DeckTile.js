/* jshint esversion:6 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { darkTeal } from '../../utils/colors';

export default function DeckTile ({ title, size }) {
  return (
    <View style={styles.tileContainer}>
      <Text style={[styles.text, {fontSize: 30}]}>
        {title}
      </Text>
      <Text style={[styles.text, {fontSize: 20}]}>
        {size} Cards
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: darkTeal,
  }
});
