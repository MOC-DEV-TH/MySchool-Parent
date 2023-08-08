import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import { COLORS, MARGINS } from "../../constants";

const CustomRadioButton = ({ label, checked, onPress }) => {
  return (
    <TouchableOpacity style={styles.radioButton} onPress={onPress}>
      <View
        style={[
          styles.radioButtonIcon,
          checked && styles.radioButtonIconChecked,
        ]}
      />
      <Text style={styles.radioButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: "row",
    marginBottom: MARGINS.m14,
    marginTop: MARGINS.m30,
    justifyContent:'center',
    alignItems:'center'
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: COLORS.white,
  },
  radioButtonIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "gray",
    marginRight: 10,
  },
  radioButtonIconChecked: {
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "blue",
  },
  radioButtonLabel: {
    color: COLORS.white,
  },
});

export default CustomRadioButton;
