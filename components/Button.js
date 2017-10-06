/* jshint esversion:6 */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { teal, white, gray } from '../utils/colors';

export default function Button ({ children, onPress, style, buttonStyle, disabled }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn, buttonStyle, disabled ? styles.disabledBtn: null]}
      onPress={onPress}>
      <Text style={[styles.BtnText, style]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iosBtn: {
    margin: 5,
    backgroundColor: teal,
    padding: 10,
    borderRadius: 7,
    marginLeft: 40,
    marginRight: 40,
  },
  androidBtn: {
    margin: 5,
    backgroundColor: teal,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnText: {
  color: white,
  fontSize: 17,
  textAlign: 'center',
  },
  disabledBtn: {
    backgroundColor: gray
  }
});
