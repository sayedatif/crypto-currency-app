import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icons from '@assets/icons';

class ListItem extends React.PureComponent {

  getCryptoIcon = item => {
    return Icons[item.slug] || Icons['default'];
  }

  render() {
    const { item } = this.props;
    return (
      <View style={styles.listContainer}>
        <View style={styles.row}>
          <Image source={this.getCryptoIcon(item)} style={styles.icon} />
          <View style={styles.nameBlock}>
            <Text style={styles.headerText}>{item.name}</Text>
            <Text style={styles.textColor}>{item.symbol}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.headerText}>${item.price}</Text>
          <Image source={Icons.next} style={styles.arrowIcon} />
        </View>
      </View>
    );
  }
}

export default ListItem;

const styles = StyleSheet.create({
  listContainer: {
    height: 80,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: '#7F81A1',
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
  },
  textColor: {
    color: '#fff'
  },
  icon: {
    width: 40,
    height: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameBlock: {
    marginLeft: 10,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  }
})