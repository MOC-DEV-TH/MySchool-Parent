import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Text from "@kaloraat/react-native-text";
import { COLORS } from "../constants";

const UserInput = ({ name, value, setValue, setKeyboardType = "default" }) => {
  return (
    <View style={styles.container}>
      <Text semi>{name}</Text>
      <TextInput
        style={styles.userInput}
        keyboardType={setKeyboardType}
        onChangeText={setValue}
        value={value}
      />
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  userInput: {
    borderBottomWidth: 0.5,
    height: 48,
    borderBottomColor: COLORS.gray,
    marginBottom: 30,
  },
});
