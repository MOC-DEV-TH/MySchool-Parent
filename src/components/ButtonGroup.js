import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS, MARGINS } from "../constants";

const ButtonGroup = ({ buttons, onItemClick }) => {
  const [clickedId, setClickedId] = useState(0);
  const handleClick = (item, id) => {
    setClickedId(id);
    onItemClick(id);
  };
  return (
    <View style={styles.container}>
      {buttons.map((buttonLabel, index) => {
        return (
          <TouchableOpacity
            onPress={(item) => handleClick(item, index)}
            key={index}
            style={index == clickedId ? styles.buttonActive : styles.button}
          >
            <Text style={index == clickedId ? styles.textActive : styles.text}>
              {buttonLabel}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ButtonGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom:MARGINS.m14
  },
  button: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  buttonActive: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: COLORS.black,
    backgroundColor: COLORS.bgColor,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  text: {
    color: COLORS.textColorBlue,
  },
  textActive: {
    color: COLORS.white,
  },
});
