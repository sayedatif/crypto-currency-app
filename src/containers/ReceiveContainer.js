import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import QRCode from 'react-native-qrcode';

class ReceiveContainer extends React.PureComponent {
  state = {
    address: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX' // random address to generate QR code
  }

  render() {
    const { visible } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => this.props.handleClose(false)}
      >
        <View style={styles.container}>
          <Text style={styles.headerText}>
            Only send Bitcoin (BTC) to this address
          </Text>
          <Text>
            Sending any other digital assest will result in permanent loss
          </Text>
          <QRCode
            value={this.state.address}
            size={200}
            bgColor='#6540D9'
            fgColor='white'
          />
        </View>
      </Modal>
    )
  }
}

export default ReceiveContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  }
})