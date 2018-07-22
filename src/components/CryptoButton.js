import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CryptoButton = props => {
  const { title } = props;
  return (
    <TouchableOpacity style={title === 'Send' ? styles.sendBtn : styles.receiveBtn}>
      <Text style={title === 'Send' ? styles.sendClr : styles.receiveClr}>{title}</Text>
    </TouchableOpacity>
  );
}

export default CryptoButton;

const styles = StyleSheet.create({
  sendBtn: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#009933',
    borderColor: '#00FF33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendClr: {
    color: '#00FF33',
  },
  receiveBtn: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#FF3300',
    borderColor: '#FF9900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  receiveClr: {
    color: '#FF9900',
  }
})