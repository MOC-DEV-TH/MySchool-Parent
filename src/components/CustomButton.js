import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Text from "@kaloraat/react-native-text";
import { COLORS, MARGINS } from "../constants";

const CustomButton = ({
  title,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        buttonStyle,
        backgroundColor: buttonColor || "#512DA8",
      }}
      onPress={onPress}
    >
      <Text
        style={{ ...styles.title, ...textStyle, color: titleColor || "#fff" }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    margin: MARGINS.m10,
    backgroundColor: COLORS.buttonColor,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});
