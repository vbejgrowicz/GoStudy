/* jshint esversion:6 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Button from '../Button';
import { darkTeal } from '../../utils/colors';

export default function Question ({ Question }) {
  return (
    <View>
      <Text style={styles.text}>
        {Question}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: darkTeal,
  }
});
