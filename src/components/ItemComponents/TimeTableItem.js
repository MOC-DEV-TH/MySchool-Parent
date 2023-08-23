import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { PADDINGS, IMGS, COLORS } from "../../constants";
import { SubTimeTableSvg } from "../../assets";

const TimeTableItem = (props) => {
  return (
    <View style={styles.card}>
      <View
        style={{ justifyContent: "center", alignItems: "center", flex: 0.4 }}
      >
        <SubTimeTableSvg/>
      </View>
      <View style={{ justifyContent: "center", flex: 0.6 }}>
        <Text>{props.item.duration}</Text>
        <Text color={COLORS.black} style={{ fontWeight: "bold" }}>
          {props.item.subject}
        </Text>
        <Text>{props.item.name}</Text>
      </View>
    </View>
  );
};

export default TimeTableItem;

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingTop: PADDINGS.p10,
    paddingBottom: PADDINGS.p10,
  },
});
