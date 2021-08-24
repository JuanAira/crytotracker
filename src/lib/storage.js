import AsyncStorage from '@react-native-async-storage/async-storage';

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (err) {
    console.log('Error Storage get', err);
    throw Error(err);
  }
};

const storage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (err) {
    console.log('Error Storage ', err);
    return false;
  }
};

const remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (err) {
    console.log('Error Storage remove', err);
    return false;
  }
};

const getKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (err) {
    console.log('Error Storage getKeys', err);
    throw Error(err);
  }
};

const getAll = async (keys) => {
  try {
    const values = await AsyncStorage.multiGet(keys);
    return values;
  } catch (err) {
    console.log('Error Storage getKeys', err);
    throw Error(err);
  }
};

export default {
  get,
  storage,
  remove,
  getAll,
  getKeys,
};
