import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Icons from '@assets/icons';

const IconHandler = props => {
  const { item, source, style } = props;
  const getCryptoIcon = item => {
    return Icons[item.slug] || Icons['default'];
  }
  const iconSrc = source || getCryptoIcon(item);

  return (
    <Image source={iconSrc} style={style || styles.icon} />
  );
}

export default IconHandler;

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
})