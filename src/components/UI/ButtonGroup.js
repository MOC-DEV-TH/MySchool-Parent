import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS, MARGINS } from "../../constants";

const ButtonGroup = ({
  buttons,
  onItemClick,
  buttonActive,
  buttonInactive,
  textActive,
  textInActive,
}) => {
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
            style={index == clickedId ? buttonActive : buttonInactive}
          >
            <Text style={index == clickedId ? textActive : textInActive}>
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
    marginBottom: MARGINS.m14,
  },
});
