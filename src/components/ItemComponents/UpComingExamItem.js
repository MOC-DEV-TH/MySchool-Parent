import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { MARGINS, IMGS, COLORS } from "../../constants";
import { RightArrowSvg, SubExamSvg } from "../../assets";

const UpComingExamItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onItemClick(props.item)}>
      <View style={styles.card}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <SubExamSvg/>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text color={COLORS.black} style={{ fontWeight: "bold" }}>
            {props.item.name}
          </Text>
          <Text>{props.item.startDate}</Text>
        </View>

        <View style={{ justifyContent: "center" }}>
         <RightArrowSvg/>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UpComingExamItem;

const styles = StyleSheet.create({
  card: {
    height: 68,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    justifyContent: "space-around",
    flex: 1,
    flexDirection: "row",
    marginBottom: MARGINS.m18,
  },
});
