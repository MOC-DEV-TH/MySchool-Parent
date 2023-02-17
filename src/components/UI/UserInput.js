import React from "react";
import { View, StyleSheet,TextInput } from "react-native";
import Text from "@kaloraat/react-native-text";
import { COLORS, MARGINS, PADDINGS } from "../../constants";

const UserInput = ({
  name,
  value,
  setValue,
  setKeyboardType = "default",
  placeHolder,
}) => {
  return (
    <View style={styles.container}>
      {/* <Text semi>{name}</Text> */}
      <TextInput
        style={styles.userInput}
        keyboardType={setKeyboardType}
        onChangeText={setValue}
        value={value}
        placeholder={placeHolder}
        secureTextEntry={true}
        multiline={false}
      />
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({
  container: {
    marginLeft:MARGINS.m30,
    marginRight:MARGINS.m30,
    marginBottom:MARGINS.m18
  },
  userInput: {
    height: 48,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    paddingLeft: PADDINGS.p10,
    borderRadius: 12,
  },
});
