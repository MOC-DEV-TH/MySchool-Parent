import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";
import { COLORS, MARGINS, PADDINGS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const CustomTextWithIcon = ({
  iconName,
  text,
  divider = true,
  onPressItem,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPressItem(text)}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name={iconName} size={20} color={COLORS.black} />
          <Text style={{ fontWeight: "bold", marginLeft: MARGINS.m14 }}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>

      {divider ? <View style={styles.divider} /> : undefined}
    </View>
  );
};

export default CustomTextWithIcon;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    justifyContent: "space-between",
  },
  userInput: {
    height: 48,
    backgroundColor: COLORS.white,

    borderRadius: 12,
    padding: PADDINGS.p2,
  },
  divider: {
    height: 0.5,
    width: "100%",
    backgroundColor: COLORS.black,
    marginTop: MARGINS.m20,
  },
});
