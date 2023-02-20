import AsyncStorage from "@react-native-async-storage/async-storage";

export const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log("error save to storage!!");
  }
};
export const getData = async (key) => {
  var value;
  try {
    await AsyncStorage.getItem(key).then((val) => {
      value = val;
    });
  } catch (e) {
    console.log("Error reading value");
  }
  return value;
};
