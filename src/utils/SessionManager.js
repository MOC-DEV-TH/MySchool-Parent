import AsyncStorage from "@react-native-async-storage/async-storage";
import AppConstants from "./AppConstants";

export const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log("error save to storage!!");
  }
};
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log("Error reading value");
  }
};

export const isAuthenticated = async () => {
  try {
    const data = await AsyncStorage.getItem(AppConstants.KEY_AUTH_TOKEN);
    if (data) return true;
  } catch (e) {
    return false;
  }
};
