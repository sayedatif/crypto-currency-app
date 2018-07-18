import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, FlatList } from 'react-native';
import { handleFetchCryptoList } from './actions';
import Loader from './components/Loader';
import ListItem from './components/ListItem';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Crypto',
    headerStyle: {
      backgroundColor: '#6540D9',
    },
    headerTintColor: '#fff',
  };

  componentDidMount = () => {
    this.props.fetchCryptoList();
  }

  render() {
    const { cryptoLoading, cryptoList } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#343750' }}>
        {cryptoLoading && <Loader />}
        {!cryptoLoading && (
          <FlatList
            data={cryptoList}
            renderItem={({item}) => <ListItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
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