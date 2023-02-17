import { StyleSheet, View,Image } from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { PADDINGS, IMGS, COLORS } from "../../constants";

const TimeTableItem = () => {
  return (
    <View style={styles.card}>
      <View
        style={{ justifyContent: "center", alignItems: "center", flex: 0.4 }}
      >
        <Image source={IMGS.timeTable} />
      </View>
      <View style={{ justifyContent: "center", flex: 0.6 }}>
        <Text>9:00 am - 9:55</Text>
        <Text color={COLORS.black} style={{ fontWeight: "bold" }}>
          Maths
        </Text>
        <Text>U Ba</Text>
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
