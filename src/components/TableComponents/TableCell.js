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
      <Text style={{fontSize:12,textAlign:"center"}}>{data}</Text>
    </View>
  );
};

export default TableCell;

const styles = StyleSheet.create({});
