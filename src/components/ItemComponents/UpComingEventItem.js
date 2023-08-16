import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { MARGINS, IMGS, COLORS } from "../../constants";
import SvgUri from "react-native-svg-uri";

const UpComingEventItem = (props) => {
  return (
    <View style={styles.eventContainer}>
      <View
        style={{ flex: 0.4, justifyContent: "center", alignItems: "center" }}
      >
        <SvgUri width="40" height="40" source={IMGS.event_svg} />
      </View>
      <View style={{ flex: 0.7 }}>
        <View style={{ flexDirection: "column" }}>
          <Text medium style={{textTransform: 'capitalize'}}>{props.item.event_name}</Text>
          <Text small color={COLORS.textColorBlue} style={{fontWeight:'bold',fontSize:12}}>
            {props.item.start_date}
          </Text>
          <Text tiny style={{ marginTop: MARGINS.m4 }}>
            {props.item.description}
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
    height: 100,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: MARGINS.m2,
  },
});
