import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput } from 'react-native';
import { darkTeal } from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    marginHorizontal: 10,
  },
  input: {
    textAlign: 'center',
    fontSize: 20,
    height: 50,
    color: darkTeal,
  },
});

export default function Input({ value, placeholder, onChange }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        maxLength={100}
        onChangeText={text => onChange(text)}
      />
    </View>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
