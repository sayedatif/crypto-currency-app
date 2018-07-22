import React from 'react';
import { View, StyleSheet } from 'react-native';
import CryptoButton from '../components/CryptoButton';

class ButtonContainer extends React.PureComponent {
  render() {
    return (
      <View style={styles.btnContainer}>
        <CryptoButton title="Receive" />
        <CryptoButton title="Send" />
      </View>
    );
  }
}

export default ButtonContainer;

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  }
})