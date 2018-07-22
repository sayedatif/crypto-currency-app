import React from 'react';
import { View, Text } from 'react-native'; 
import colors from './utils/colors';

class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: 'History',
    headerStyle: {
      backgroundColor: '#6540D9',
    },
    headerTintColor: colors.white,
  };

  render() {
    return (
      <View>
        <Text>HistoryScreen</Text>
      </View>
    );
  }
}

export default HistoryScreen;