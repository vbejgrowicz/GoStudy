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
        onChangeText={(text) => onChange(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',

  },
  input: {
    textAlign: 'center',
    height: 40,
    color: darkTeal
  },
});
