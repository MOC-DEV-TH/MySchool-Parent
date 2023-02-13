import { StyleSheet, View, FlatList, Image } from "react-native";
import React, { useState } from "react";
import ButtonGroup from "../../components/ButtonGroup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Text from "@kaloraat/react-native-text";
import { COLORS, PADDINGS, MARGINS, IMGS } from "../../constants";

const TimeTableAndRoutine = () => {
  const [items, setItems] = useState([
    { name: "one" },
    { name: "two" },
    { name: "three" },
  ]);
  const onPressButton = (item) => {
    console.log(item);
  };
  const renderItem = () => {
    return (
      <View style={styles.card}>
        <View
          style={{ flex: 0.3, justifyContent: "center", alignItems: "center" }}
        >
          <Image source={IMGS.timeTable} />
        </View>
        <View style={{ flex: 0.7,justifyContent:"center" }}>
            <Text>9:00 am - 9:55</Text>
            <Text color={COLORS.black} style={{fontWeight:"bold"}}>Maths</Text>
            <Text>U Ba</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <Text medium color={COLORS.white} style={styles.title}>
          Mya Mya
        </Text>
        <ButtonGroup
          buttons={["Mon", "Tue", "Wed", "Thu", "Fri"]}
          onItemClick={onPressButton}
        />
        <FlatList
          data={items}
          style={{ marginTop: MARGINS.m10 }}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default TimeTableAndRoutine;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: MARGINS.m6,
    marginBottom: MARGINS.m16,
  },
  card: {
    height: 68,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    marginBottom: MARGINS.m18,
  },
});
