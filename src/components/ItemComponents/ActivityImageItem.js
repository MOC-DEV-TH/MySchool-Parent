import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { PADDINGS, IMGS, COLORS, MARGINS } from "../../constants";
import SvgUri from "react-native-svg-uri";

const screenWidth = Dimensions.get("window").width;
const ActivityImageItem = (props) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: MARGINS.m10,
        backgroundColor: COLORS.white,
        borderRadius: 12,
      }}
      activeOpacity={1}
      onPress={() => props.onClick()}
    >
      <View style={styles.eventContainer}>
        <View
          style={{ flex: 0.4, justifyContent: "center", alignItems: "center" }}
        >
          <SvgUri width="50" height="50" source={IMGS.activity_svg} />
        </View>
        <View style={{ flex: 0.7 }}>
          <View style={{ flexDirection: "column" }}>
            <Text medium style={{ textTransform: "capitalize" }}>
              Activity Photos
            </Text>
            <Text small color={COLORS.textColorBlue}>
              
            </Text>
            <Text tiny style={{ marginTop: MARGINS.m10 }}>
              View More {">>"}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ActivityImageItem;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  eventContainer: {
    backgroundColor: COLORS.white,
    height: 100,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: MARGINS.m8,
  },
});
