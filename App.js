global.self = global;
import React from 'react';
import { Provider } from 'react-redux';
import RootStack from './src/RootStack';
import store from './src/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
