import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { handleFetchCryptoList } from './actions';
import Loader from './components/Loader';

class Home extends React.Component {

  componentDidMount = () => {
    this.props.fetchCryptoList();
  }

  render() {
    const { cryptoLoading } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {cryptoLoading && <Loader />}
        {/* <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        /> */}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cryptoLoading: state.crypto.cryptoLoading,
})

const mapDispatchToProps = dispatch => ({
  fetchCryptoList: () => dispatch(handleFetchCryptoList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);