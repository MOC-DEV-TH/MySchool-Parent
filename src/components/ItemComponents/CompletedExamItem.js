import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { MARGINS, IMGS, COLORS, PADDINGS } from "../../constants";
import { RightArrowSvg, SubExamSvg } from "../../assets";

const CompletedExamItem = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.onItemClick(props.item.item)}>
        <View style={styles.completedCard}>
          <SubExamSvg />
          <View style={{ flex: 0.4 }}>
            <Text color={COLORS.black} style={{ fontWeight: "bold" }}>
              {props.item.item.exam_name}
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor:
                  props.item.item.exam_result.pass == true
                    ? COLORS.present
                    : props.item.item.exam_result.pass == null
                    ? COLORS.white
                    : COLORS.absent,
                paddingTop: PADDINGS.p2,
                paddingBottom: PADDINGS.p2,
                paddingLeft: PADDINGS.p10,
                paddingRight: PADDINGS.p10,
                borderRadius: 12,
              }}
            >
              <Text color={COLORS.white}>
                {props.item.item.exam_result.pass == true
                  ? "PASS"
                  : props.item.item.exam_result.pass == null
                  ? ""
                  : "FAIL"}
              </Text>
            </View>
            <RightArrowSvg/>
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
