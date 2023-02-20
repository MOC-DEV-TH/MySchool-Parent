import { StyleSheet, View, Image, Dimensions } from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { MARGINS, IMGS, COLORS } from "../../constants";

const UpComingEventItem = (props) => {
  return (
    <View style={styles.eventContainer}>
      <View
        style={{ flex: 0.4, justifyContent: "center", alignItems: "center" }}
      >
        <Image source={IMGS.group} />
      </View>
      <View style={{ flex: 0.7 }}>
        <View style={{ flexDirection: "column" }}>
          <Text medium>{props.title}</Text>
          <Text small color={COLORS.textColorBlue}>
            18th June 2023
          </Text>
          <Text tiny style={{ marginTop: MARGINS.m10 }}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UpComingEventItem;

const styles = StyleSheet.create({
  eventContainer: {
    backgroundColor: COLORS.white,
    height: 120,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: MARGINS.m8,
  },
});
