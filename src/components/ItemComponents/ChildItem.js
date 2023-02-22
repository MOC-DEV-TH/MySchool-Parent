import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { PADDINGS, IMGS, COLORS } from "../../constants";

const screenWidth = Dimensions.get("window").width;
const ChildItem = (props) => {
  return (
    <ImageBackground
      source={IMGS.id_card_bg}
      imageStyle={{ borderRadius: 12 }}
      style={{ paddingBottom: PADDINGS.p16, paddingTop: PADDINGS.p16 }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => props.onItemClick(props)}
      >
        <View style={styles.childContainer}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image source={IMGS.child} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text
              medium
              color={COLORS.white}
              style={{ fontWeight: "bold", paddingBottom: PADDINGS.p4 }}
            >
              {props.item.name}
            </Text>
            <Text color={COLORS.white} style={{ paddingBottom: PADDINGS.p4 }}>
              ID No.{props.item.id}
            </Text>
            <Text color={COLORS.white} style={{ paddingBottom: PADDINGS.p4 }}>
              {props.item.class_name}
              <Text color={COLORS.white}>({props.item.section})</Text>
            </Text>
          </View>
          <View style={{ justifyContent: "flex-end" }}>
            <Image source={IMGS.arrow_right_white} />
          </View>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default ChildItem;

const styles = StyleSheet.create({
  childContainer: {
    width: screenWidth - 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: PADDINGS.p10,
    paddingTop: PADDINGS.p10,
  },
});
