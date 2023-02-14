import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "@kaloraat/react-native-text";
import { COLORS, MARGINS, PADDINGS } from "../constants";

const CustomText = ({ label, name }) => {
  return (
    <View style={styles.container}>
      <Text semi>{label}</Text>
      <Text style={{fontWeight:"bold"}}>{name}</Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    height:64,
    justifyContent:"space-around",
    paddingLeft:PADDINGS.p10,
    marginBottom:MARGINS.m20
  },
  userInput: {
    height: 48,
    backgroundColor: COLORS.white,
    paddingLeft: PADDINGS.p10,
    borderRadius: 12,
    padding:PADDINGS.p2
  },
});
