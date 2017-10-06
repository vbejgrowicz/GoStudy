/* jshint esversion:6 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Button from '../Button';
import { darkTeal } from '../../utils/colors';

export default function Question ({ Question }) {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {Question}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    color: darkTeal,
  },
});
