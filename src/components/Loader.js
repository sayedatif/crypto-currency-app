import React from 'react';
import { ActivityIndicator } from 'react-native';

const Loader = props => {
  return (
    <ActivityIndicator size={props.size} />
  )
}

Loader.defaultProps = {
  size: 'large',
}

export default Loader;
