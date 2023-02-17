import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { COLORS, MARGINS, PADDINGS } from "../../constants";

const HomeWorkItem = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <View>
          <Text color={COLORS.present}>Assigned Date:</Text>
          <Text color={COLORS.present}>20/02/2023</Text>
        </View>
        <View>
          <Text color={COLORS.absent}>Due Date:</Text>
          <Text color={COLORS.absent}>20/02/2023</Text>
        </View>
      </View>

      <Text
        style={{ fontSize: 16, fontWeight: "bold", marginTop: MARGINS.m10 }}
      >
        Homework Title{" "}
      </Text>
      <Text style={{ marginBottom: MARGINS.m10 }}>Subject :English</Text>

      <View style={styles.horizontalDivider} />

      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </View>
  );
};

export default HomeWorkItem;

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 12,
    backgroundColor: COLORS.white,
    padding: PADDINGS.p22,
    flex: 1,
    marginBottom: MARGINS.m18,
  },
  horizontalDivider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.black,
    marginBottom: MARGINS.m10,
  },
});
