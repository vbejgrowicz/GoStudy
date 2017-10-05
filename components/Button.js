/* jshint esversion:6 */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { teal, white } from '../utils/colors';

export default function Button ({ children, onPress, style, buttonStyle}) {
  return (
    <TouchableOpacity
      style={[Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn, buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.BtnText, style]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iosBtn: {
    margin:10,
    backgroundColor: teal,
    padding: 10,
    borderRadius: 7,
    height:40,
    marginLeft: 40,
    marginRight: 40,
  },
  androidBtn: {
    margin:10,
    backgroundColor: teal,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    height:40,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnText: {
  color: white,
  fontSize: 17,
  textAlign: 'center',
}
});
