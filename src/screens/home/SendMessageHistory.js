import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { COLORS, MARGINS, PADDINGS } from "../../constants";
const data = [
  {
    id: "1",
    title: "Item 1",
    description:
      "Admin Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: "2",
    title: "Item 2",
    description:
      "Admin Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: "3",
    title: "Item 3",
    description:
      "Admin Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];
const SendMessageHistory = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.contentText}>From : </Text>
          <Text style={styles.contentText}>{item.title}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.contentText}>To : </Text>
          <Text style={styles.contentText}>{item.title}</Text>
        </View>
      </View>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Message</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SendMessageHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  contentText: {
    color: COLORS.black,
    marginBottom:MARGINS.m10
  },
  itemContainer: {
    padding: 10,
    borderBottomColor: "#ccc",
    backgroundColor: COLORS.white,
    marginTop: MARGINS.m10,
    borderRadius: 8,
  },
  title: {
    fontSize: 12,
    marginBottom: MARGINS.m10,
    marginTop: MARGINS.m10,
  },
  description: {
    fontSize: 12,
    color: COLORS.gray,
    marginBottom:MARGINS.m10
  },
  title: {
    fontWeight: "bold",
    alignItems: "flex-start",
    marginTop: MARGINS.m6,
    color: COLORS.white,
  },
});
