import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import IconHandler from './components/IconHandler';
import Chart from './components/Chart';

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name'),
      headerStyle: {
        backgroundColor: '#6540D9',
      },
      headerTintColor: '#fff',
    }
  };

  render() {
    const { state } = this.props.navigation;
    const rowData = [{
      name: 'Market cap',
      value: `$${state.params.marketCap}`
    }, {
      name: 'Volumn 24hr',
      value: `$${state.params.volume24h}`
    }, {
      name: 'Available Supply',
      value: state.params.supply ? state.params.supply : '-'
    }, {
      name: '% Change 24hr',
      value: `${state.params.change24h}%`
    }]
    return (
      <View style={styles.detailContainer}>
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.center}>
              <Text style={styles.textColor}>{state.params.name} Price</Text>
              <Text style={styles.valueText}>${state.params.price}</Text>
            </View>
            <View>
              <IconHandler item={state.params} />
            </View>
            <View style={styles.center}>
              <Text style={styles.textColor}>This week</Text>
              <Text style={styles.valueText}>
                {state.params.change7d > 0 ? '+' : ''}{state.params.change7d}%
              </Text>
            </View>
          </View>
          {rowData.map((data, index) => (
            <View style={styles.row} key={index}>
              <Text style={styles.textColor}>{data.name}</Text>
              <Text style={styles.valueText}>{data.value}</Text>
            </View>
          ))}
          <Chart />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: '#343750',
    padding: 10
  },
  card: {
    flex: 1,
    backgroundColor: '#7F81A1',
  },
  valueText: {
    fontSize: 20,
    color: '#fff',
  },
  textColor: {
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#D1D0DE',
    padding: 10,
  },
  center: {
    flex: 1,
    alignItems: 'center',
  }
})