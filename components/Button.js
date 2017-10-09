import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { teal, white, gray } from '../utils/colors';

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
    backgroundColor: gray,
  },
});

export default function Button({
  children, onPress, style, buttonStyle, disabled,
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[Platform.OS === 'ios' ?
      styles.iosBtn : styles.androidBtn, buttonStyle,
      disabled ? styles.disabledBtn : null]}
      onPress={onPress}
    >
      <Text style={[styles.BtnText, style]}>{children}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  buttonStyle: PropTypes.object,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  style: {},
  buttonStyle: {},
};
