import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { MARGINS, IMGS, COLORS, PADDINGS } from "../../constants";

const CompletedExamItem = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.completedCard}>
          <Image source={IMGS.exam_complete} />
          <View style={{ flex: 0.4 }}>
            <Text style={{ fontWeight: "bold" }}>First Term</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor:
                  props.examStatus === "PASS" ? COLORS.present : COLORS.absent,
                paddingTop: PADDINGS.p2,
                paddingBottom: PADDINGS.p2,
                paddingLeft: PADDINGS.p10,
                paddingRight: PADDINGS.p10,
                borderRadius: 12,
              }}
            >
              <Text color={COLORS.white}>{props.examStatus}</Text>
            </View>
            <Image source={IMGS.arrowBlue} style={{ marginLeft: MARGINS.m6 }} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CompletedExamItem;

const styles = StyleSheet.create({
  completedCard: {
    height: 68,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: MARGINS.m20,
  },
});
