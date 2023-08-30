import { TouchableOpacity, StyleSheet, View } from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { COLORS, MARGINS, PADDINGS } from "../../constants";

const HomeWorkItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={.7}
      onPress={() => props.onItemClick(props.item.item)}
    >
      <View style={styles.itemContainer}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <View>
            <Text color={COLORS.present}>Assigned Date:</Text>
            <Text color={COLORS.present}>{props.item.item.assigned_date}</Text>
          </View>
          <View>
            <Text color={COLORS.absent}>Due Date:</Text>
            <Text color={COLORS.absent}>{props.item.item.due_date}</Text>
          </View>
        </View>

        <Text
          style={{ fontSize: 16, fontWeight: "bold", marginTop: MARGINS.m10 }}
        >
          Subject{" "}
        </Text>
        <Text style={{ marginBottom: MARGINS.m10 }}>
          {props.item.item.subject}
        </Text>

        <Text
          style={{ fontSize: 16, fontWeight: "bold", marginTop: MARGINS.m4 }}
        >
         {props.item.item.title}
        </Text>
        {/* <Text style={{ marginBottom: MARGINS.m4 }}>
          {props.item.item.title}
        </Text> */}

        {/* <View style={styles.horizontalDivider} />

        <Text style={styles.text}>{props.item.item.description}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default HomeWorkItem;

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 12,
    backgroundColor: COLORS.white,
    padding: PADDINGS.p10,
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
