/* jshint esversion:6 */
import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native';
import { darkTeal } from '../../../utils/colors';

export default function Input ({ value, placeholder, onChange }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        maxLength={100}
        onChangeText={(text) => onChange(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    marginHorizontal: 10,
  },
  input: {
    textAlign: 'center',
    fontSize: 20,
    height: 50,
    color: darkTeal
  },
});
