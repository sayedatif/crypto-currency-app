import React from 'react';
import { View, StyleSheet } from 'react-native';
import CryptoButton from '../components/CryptoButton';

class ButtonContainer extends React.PureComponent {
  render() {
    return (
      <View style={styles.btnContainer}>
        <CryptoButton title="Receive" onPress={() => this.props.buttonPress('receive')} />
        <CryptoButton title="Send" onPress={() => this.props.buttonPress('send')} />
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