import { StyleSheet, View } from "react-native";
import React from "react";
import { COLORS, MARGINS } from "../../constants";
import Text from "@kaloraat/react-native-text";

const TableHead = ({ title }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        marginLeft:MARGINS.m4,
        marginRight:MARGINS.m4
      }}
    >
      <Text style={{fontSize:12}} color={COLORS.white}>{title}</Text>
    </View>
  );
};

export default TableHead;

const styles = StyleSheet.create({});
