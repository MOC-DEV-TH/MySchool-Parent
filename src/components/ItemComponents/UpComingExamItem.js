import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { MARGINS, IMGS, COLORS } from "../../constants";

const UpComingExamItem = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={IMGS.timeTable} />
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text color={COLORS.black} style={{ fontWeight: "bold" }}>
            Feb Monthly Exam
          </Text>
          <Text>06/01/2023</Text>
        </View>

        <View style={{ justifyContent: "center" }}>
          <Image source={IMGS.arrowBlue} style={{ marginLeft: MARGINS.m6 }} />
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
