import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import ButtonContainer from './containers/ButtonContainer';
import IconHandler from './components/IconHandler';
import Chart from './components/Chart';
import CryptoButton from './components/CryptoButton';
import Icons from '@assets/icons';
import colors from './utils/colors';
import ReceiveContainer from './containers/ReceiveContainer';
import { connect } from 'react-redux';
import { setReceiveVisible } from './actions'

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name'),
      headerStyle: {
        backgroundColor: '#6540D9',
      },
      headerTintColor: colors.white,
      headerRight: (
        <TouchableHighlight onPress={() => navigation.navigate('History')}>
          <IconHandler
            source={Icons.history}
            style={styles.headerIcon}
          />
        </TouchableHighlight>
      ),
    }
  };

  handleButtonPress = type => {
    if (type === 'receive') {
      this.props.setReceiveVisible(true);
    } else {
      const data = {
        type,
        name: this.props.navigation.getParam('name'),
      }
      this.props.navigation.navigate('Transact', data);
    }
  }

  render() {
    const { receiveVisible, navigation } = this.props;
    const { state } = navigation;
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
        <ReceiveContainer
          visible={receiveVisible}
          handleClose={this.props.setReceiveVisible}
        />
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
          <ButtonContainer buttonPress={this.handleButtonPress} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  receiveVisible: state.crypto.receiveVisible
});

const mapDispatchToProps = dispatch => ({
  setReceiveVisible: val => dispatch(setReceiveVisible(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen)

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    padding: 10
  },
  card: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  valueText: {
    fontSize: 20,
    color: colors.textColor,
  },
  textColor: {
    color: colors.textColor,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.textColor,
    padding: 10,
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  headerIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  }
})