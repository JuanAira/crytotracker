/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Colors from '../../res/colors';
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import Http from '../../lib/http';
import CoinItem from './CoinItem';
import CoinsSearch from './coinsSearch';

const CoinsScreen = (props) => {
  [coins, setCoins] = useState([]);
  [allCoins, setAllCoins] = useState([]);
  [loading, setLoanding] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await Http.get('https://api.coinlore.net/api/tickers/');
      setCoins(data.data);
      setAllCoins(data.data);
      setLoanding(false);
    };
    getData();
  }, []);

  const handlerPress = (coin) => {
    //console.log(props.navigation.navigate);
    props.navigation.navigate('CoinDetail', { coin });
  };
  const handleSearch = (text) => {
    if (text === '') {
      setCoins(allCoins);
    } else {
      const coinsFiltered = coins.filter((item) => {
        return (
          item.name.toLowerCase().includes(text.toLowerCase()) ||
          item.symbol.toLowerCase().includes(text.toLowerCase())
        );
      });
      setCoins(coinsFiltered);
    }
  };

  return (
    <View style={style.container}>
      {loading && (
        <ActivityIndicator
          color={Colors.charade}
          size="large"
          style={style.loader}
        />
      )}
      <CoinsSearch onChange={handleSearch} />
      <FlatList
        style={style.flatList}
        data={coins}
        renderItem={({ item }) => (
          <CoinItem
            item={item}
            handlePress={() => {
              return handlerPress(item);
            }}
          />
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  title: {
    color: Colors.white,
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: Colors.white,
    textAlign: 'center',
  },
  loader: {
    marginTop: 10,
  },
  flatList: {
    marginTop: 10,
  },
});

export default CoinsScreen;
