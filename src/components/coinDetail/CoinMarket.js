import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../res/colors';

const CoinMarket = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.priceText}>{`$ ${item.price_usd}`}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blackPearl,
    borderWidth: 1,
    minWidth: 133,
    padding: 16,
    marginRight: 8,
    maxHeight: 100,
    borderRadius: 10,
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.5,
    borderColor: Colors.blackPearl,
    marginTop: 10,
  },
  nameText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  priceText: {
    color: Colors.white,
  },
});

export default CoinMarket;
