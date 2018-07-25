import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, FlatList, StyleSheet } from 'react-native';
import { handleFetchCryptoList } from './actions';
import Loader from './components/Loader';
import ListItem from './components/ListItem';
import colors from './utils/colors';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Crypto',
    headerStyle: {
      backgroundColor: colors.headerColor,
    },
    headerTintColor: colors.white,
  };

  componentDidMount = () => {
    this.props.fetchCryptoList();
  }

  handleCardClick = data => {
    this.props.navigation.navigate('Details', data);
  }

  render() {
    const { cryptoLoading, cryptoList } = this.props;
    return (
      <View style={styles.appContainer}>
        {cryptoLoading && <Loader />}
        {!cryptoLoading && (
          <View style={styles.listContainer}>
            <FlatList
              data={cryptoList}
              renderItem={({item, index}) => <ListItem item={item} keyIndex={index} handleCardClick={data => this.handleCardClick(data)} dataLength={cryptoList.length} />}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cryptoLoading: state.crypto.cryptoLoading,
  cryptoList: state.crypto.cryptoList,
})

const mapDispatchToProps = dispatch => ({
  fetchCryptoList: () => dispatch(handleFetchCryptoList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  listContainer: {
    margin: 10,
  },
})