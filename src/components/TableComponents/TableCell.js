import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";

const TableCell = ({ data }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text>{data}</Text>
    </View>
  );
};

export default TableCell;

const styles = StyleSheet.create({});
