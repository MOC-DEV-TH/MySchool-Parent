import { StyleSheet, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import Text from "@kaloraat/react-native-text";

const TableHead = ({ title }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text color={COLORS.white}>{title}</Text>
    </View>
  );
};

export default TableHead;

const styles = StyleSheet.create({});
