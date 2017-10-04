/* jshint esversion:6 */
import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native';
import { darkTeal, ightTeal, white } from '../../../utils/colors';

export default function TitleInput ({ title, onChange }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter Title...'
        value={title}
        onChangeText={(text) => onChange(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    marginLeft: 40,
    marginRight: 40,
  },
  input: {
    textAlign: 'center',
    height: 40,
    color: darkTeal
  },
});
