import { StyleSheet, View, FlatList, Image } from "react-native";
import React, { useState } from "react";
import ButtonGroup from "../../components/UI/ButtonGroup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Text from "@kaloraat/react-native-text";
import { COLORS, PADDINGS, MARGINS, IMGS } from "../../constants";
import TimeTableItem from "../../components/ItemComponents/TimeTableItem";

const TimeTableAndRoutine = () => {
  const onPressButton = (item) => {
    console.log(item);
  };
  const [resultData, setResultData] = useState([
    {
      sbjName: "Myanmar",
      grade: "A",
      status: "PASS",
    },
    {
      sbjName: "English",
      grade: "B",
      status: "PASS",
    },
    {
      sbjName: "Maths",
      grade: "A",
      status: "FAIL",
    },
  ]);

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: COLORS.gray,
          marginLeft: MARGINS.m10,
          marginRight: MARGINS.m10,
        }}
      />
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
          buttonActive={styles.btnActive}
          buttonInactive={styles.btnInactive}
          textActive={styles.textActive}
          textInActive={styles.textInActive}
        />
        <View
          style={{
            backgroundColor: COLORS.white,
            borderRadius: 12,
            marginLeft: MARGINS.m6,
            marginRight: MARGINS.m6,
          }}
        >
          <FlatList
            data={resultData}
            style={{ marginTop: MARGINS.m10 }}
            showsVerticalScrollIndicator={false}
            renderItem={() => <TimeTableItem />}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={FlatListItemSeparator}
          />
        </View>
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
    marginTop: MARGINS.m12,
    marginBottom: MARGINS.m20,
  },
  btnInactive: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  btnActive: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: COLORS.black,
    backgroundColor: COLORS.bgColor,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  textInActive: {
    color: COLORS.textColorBlue,
  },
  textActive: {
    color: COLORS.white,
  },
});
