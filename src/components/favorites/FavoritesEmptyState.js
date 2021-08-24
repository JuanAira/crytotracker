import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../res/colors';

const FavoritesEmptyState = () => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.text}>You don't have any favorites yet </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default FavoritesEmptyState;
