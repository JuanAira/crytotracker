/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FavoritesEmptyState from './FavoritesEmptyState';
import Colors from '../../res/colors';
import Storage from '../../lib/storage';
import CoinItem from '../coins/CoinItem';

const FavoritesScreen = (props) => {
  [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    const keys = await Storage.getKeys();
    const FavoriteKeys = keys.filter((item) => item.includes('Favorite-'));
    let favs = await Storage.getAll(FavoriteKeys);
    favs = favs.map((item) => JSON.parse(item[1]));
    setFavorites(favs);
  };
  const handlePress = (coin) => {
    props.navigation.navigate('CoinDetail', { coin });
  };
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', getFavorites);
    return unsubscribe;
  }, [props]);

  return (
    <View style={styles.contanier}>
      {favorites.length === 0 ? <FavoritesEmptyState /> : null}

      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={({ item }) => (
            <CoinItem item={item} handlePress={() => handlePress(item)} />
          )}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: 10,
  },
});

export default FavoritesScreen;
