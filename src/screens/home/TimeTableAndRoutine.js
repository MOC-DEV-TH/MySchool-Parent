import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import ButtonGroup from "../../components/UI/ButtonGroup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Text from "@kaloraat/react-native-text";
import { COLORS, PADDINGS, MARGINS, IMGS } from "../../constants";
import TimeTableItem from "../../components/ItemComponents/TimeTableItem";
import { useSelector, useDispatch } from "react-redux";
import * as timeTableAction from "../../store/actions/timeTable";

const TimeTableAndRoutine = ({ route, navigation }) => {
  const { studentData } = route.params;
  console.log(studentData.name);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();

  //get all routine data
  const routineData = useSelector((state) => state.titleTable.routineData);

  //initial load data
  useEffect(() => {
    loadRoutineData(0);
  }, []);

  //load routine data
  const loadRoutineData = useCallback(async (dayIndex) => {
    setIsRefreshing(true);
    try {
      await dispatch(
        timeTableAction.getClassRoutine(
          studentData.sessionId,
          studentData.classId,
          studentData.sectionId,
          dayIndex
        )
      );
    } catch (error) {}
    setIsRefreshing(false);
  }, []);

  console.log("RoutineData", routineData);
  //press button group
  const onPressButton = (item) => {
    loadRoutineData(item);
  };

  //item separator component
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

  //renderUI
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
        {isRefreshing ? (
          <ActivityIndicator size="large" />
        ) : (
          <View
            style={{
              backgroundColor:
                routineData.length == 0 ? COLORS.black : COLORS.white,
              borderRadius: 12,
            }}
          >
            <FlatList
              isRefreshing={isRefreshing}
              data={routineData}
              style={{ marginTop: MARGINS.m10 }}
              showsVerticalScrollIndicator={false}
              renderItem={(itemData) => <TimeTableItem item={itemData.item} />}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={FlatListItemSeparator}
            />
          </View>
        )}
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
