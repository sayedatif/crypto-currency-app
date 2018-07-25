import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CryptoButton = props => {
  const { title } = props;
  return (
    <TouchableOpacity
      style={[styles.btn, title === 'Send' ? styles.sendClr : styles.receiveClr]}
      onPress={props.onPress}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

export default CryptoButton;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendClr: {
    borderColor: '#00FF33',
  },
  receiveClr: {
    borderColor: '#FF9900',
  }
})