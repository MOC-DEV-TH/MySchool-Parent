import { StyleSheet, FlatList, View } from "react-native";
import React, { useState } from "react";
import Text from "@kaloraat/react-native-text";
import Container from "../../components/Container";
import { COLORS, MARGINS, PADDINGS } from "../../constants";

const Notification = (props) => {
  const [notifications, setNotifications] = useState([
    { name: "one" },
    { name: "one" },
    { name: "one" },
    { name: "one" },
    { name: "one" },
    { name: "one" },
  ]);

  const renderNotificationItems = () => {
    return (
      <View style={styles.noti}>
        <Text style={{ fontWeight: "bold" }}>Notification Title</Text>
        <Text>Lorem ipsum dolor sit amet, conse</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text medium style={styles.text}>Notifications</Text> 
      <FlatList
        data={notifications}
        style={{ marginTop: MARGINS.m10 }}
        showsVerticalScrollIndicator={false}
        renderItem={renderNotificationItems}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    padding:PADDINGS.p10
  },
  noti: {
    height: 68,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    alignItems: "flex-start",
    marginBottom: MARGINS.m20,
    paddingLeft:PADDINGS.p16,
    paddingTop:PADDINGS.p6
  },
  text : {
    fontWeight: "bold",
    marginTop: MARGINS.m8,
    marginBottom: MARGINS.m8,
    color:COLORS.white
  }
});
