import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, FlatList } from 'react-native'; 
import { handleFetchHistoryList } from './actions';
import Loader from './components/Loader';
import colors from './utils/colors';
import moment from 'moment';

class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: 'History',
    headerStyle: {
      backgroundColor: colors.headerColor,
    },
    headerTintColor: colors.white,
  };

  componentDidMount = () => {
    this.props.fetchHistoryList();
  }

  render() {
    const { historyLoading, historyList } = this.props;
    const renderHeader = (
      <View style={[styles.tableRow, styles.grey]}>
        <Text style={styles.headerText}>Time</Text>
        <Text style={styles.headerText}>High</Text>
        <Text style={styles.headerText}>Low</Text>
        <Text style={styles.headerText}>Close</Text>
      </View>
    );

    const renderRows = (item, index) => {
      return (
        <View key={index} style={[styles.tableRow, index % 2 === 0 ? styles.white : styles.grey]}>
          <Text>{moment(item.time).format('HH:mm:ss')}</Text>
          <Text>${item.high}</Text>
          <Text>${item.low}</Text>
          <Text>${item.close}</Text>
        </View>
      )
    }

    return (
      <View style={styles.historyContainer}>
        {historyLoading && <Loader />}
        {!historyLoading && (
          <View style={styles.tableContainer}>
            {renderHeader}
            <FlatList
              data={historyList}
              renderItem={({item, index}) => renderRows(item, index)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  historyLoading: state.crypto.historyLoading,
  historyList: state.crypto.historyList
});

const mapDispatchToProps = dispatch => ({
  fetchHistoryList: () => dispatch(handleFetchHistoryList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);

const styles = StyleSheet.create({
  historyContainer: {
    flex: 1,
  },
  tableContainer: {
    margin: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  white: {
    backgroundColor: '#fff'
  },
  grey: {
    backgroundColor: '#ccc'
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})