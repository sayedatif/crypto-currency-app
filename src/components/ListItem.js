import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import IconHandler from './IconHandler';
import Icons from '@assets/icons';

class ListItem extends React.PureComponent {
  render() {
    const { item } = this.props;
    return (
      <TouchableHighlight onPress={() => this.props.handleCardClick(item)}>
        <View style={styles.listContainer}>
          <View style={styles.row}>
            <IconHandler item={item} />
            <View style={styles.nameBlock}>
              <Text style={styles.headerText}>{item.name}</Text>
              <Text style={styles.textColor}>{item.symbol}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.nameBlock, styles.alignRight]}>
              <Text style={styles.headerText}>${item.price}</Text>
              <Text style={item.change1h > 0 ? styles.textGreen : styles.textRed}>{item.change1h}%</Text>
            </View>
            <IconHandler item={item} source={Icons.next} style={styles.arrowIcon} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ListItem;

const styles = StyleSheet.create({
  listContainer: {
    height: 80,
    borderRadius: 5,
    margin: 10,
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
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  textRed: {
    color: '#CC0033',
  },
  textGreen: {
    color: '#00FF33',
  }
})