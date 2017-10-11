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

export default function Input({
  value,
  placeholder,
  onChange,
  keyType,
  disabled,
  onSubmit,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        maxLength={100}
        onChangeText={text => onChange(text)}
        returnKeyType={keyType}
        enablesReturnKeyAutomatically={disabled}
        onSubmitEditing={placeholder === 'Enter Question...' ? null : onSubmit}
      />
    </View>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  keyType: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};
