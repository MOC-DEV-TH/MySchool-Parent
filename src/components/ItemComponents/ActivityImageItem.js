import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { IMGS, COLORS, MARGINS } from "../../constants";
import { ActivitySvg } from "../../assets";

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
          <ActivitySvg width={50} height={50} />
          
          {/* <Image
            source={IMGS.activity}
            resizeMode="contain"
            style={{ height: 50, width: 50 }}
          /> */}
        </View>
        <View style={{ flex: 0.4 }}>
          <Text
            medium
            style={{ textTransform: "capitalize", fontWeight: "bold" }}
          >
            Activity Photos
          </Text>
        </View>
        <View style={{ flex: 0.4 }}>
          <Text
            tiny
            style={{
              textTransform: "capitalize",
              color: COLORS.bgColor,
              alignSelf: "center",
            }}
          >
            View More {">>"}
          </Text>
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
