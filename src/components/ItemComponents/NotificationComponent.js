import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const NotificationComponent = (props) => {
  console.log("NotificationCount", props.notificationCount);

  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <Ionicons name="notifications" size={20} color={COLORS.white} />
        <View
          style={{
            height: 18,
            width: 18,
            borderRadius: 1000,
            position: "absolute",
            top: -7,
            right: -8,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              alignSelf: "center",
              fontSize: 8,
              alignItems: "center",
              textAlign: "center",
              position: "absolute",
              top: 3,
            }}
          >
            {props.notificationCount}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationComponent;

const styles = StyleSheet.create({});
