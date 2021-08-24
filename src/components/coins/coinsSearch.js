/* eslint-disable no-undef */
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../res/colors';

const CoinsSearch = (props) => {
  [query, setQuery] = useState('');
  const handleText = (text) => {
    setQuery(text);

    if (props.onChange) {
      props.onChange(text);
    }
  };
  return (
    <View>
      <TextInput
        style={[
          styles.textInput,
          Platform.OS === 'ios' ? styles.textInputIOS : styles.textInputAndroid,
        ]}
        value={query}
        onChangeText={handleText}
        placeholder="Search coin"
        placeholderTextColor={Colors.blackPearl}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: Colors.gray,
    paddingLeft: 16,
    color: Colors.blackPearl,
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon,
  },
  textInputIOS: {
    margin: 8,
    borderRadius: 8,
  },
});

export default CoinsSearch;
