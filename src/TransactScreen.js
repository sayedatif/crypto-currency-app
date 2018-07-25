import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from './utils/colors';

class TransactScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Transact',
      headerStyle: {
        backgroundColor: colors.headerColor,
      },
      headerTintColor: colors.white,
    }
  };

  render() {
    const { navigation } = this.props;
    const { state } = navigation;
    console.log('state', state);
    return (
      <View style={styles.transactContainer}>
        <Text>Send screen</Text>
      </View>
    )
  }
}

export default TransactScreen;

const styles = StyleSheet.create({
  transactContainer: {
    flex: 1,
  }
})