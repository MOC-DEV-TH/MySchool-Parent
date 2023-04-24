import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import ButtonGroup from "../../components/UI/ButtonGroup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Text from "@kaloraat/react-native-text";
import { COLORS, PADDINGS, MARGINS, ROUTES } from "../../constants";
import UpComingExamItem from "../../components/ItemComponents/UpComingExamItem";
import CompletedExamItem from "../../components/ItemComponents/CompletedExamItem";
import { useSelector, useDispatch } from "react-redux";
import * as examActions from "../../store/actions/exam";

const Exam = ({ navigation, route }) => {
  const { studentData } = route.params;
  console.log(studentData);
  const dispatch = useDispatch();
  const [itemState, setItemState] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isCompletedRefreshing, setIsCompletedRefreshing] = useState(false);

  //get all completed exam and upcoming exam
  const completedExam = useSelector((state) => state.exam.completedExamData);
  const upcomingExam = useSelector((state) => state.exam.upcomingExamData);

  //initial load data
  useEffect(() => {
    loadUpcomingExam();
  }, []);

  //load upcomingExam
  const loadUpcomingExam = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(examActions.getAllUpcomingExam());
    } catch (error) {}
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  //load completedExam
  const loadCompletedExam = useCallback(async () => {
    setIsCompletedRefreshing(true);
    try {
      await dispatch(
        examActions.getAllCompletedExam(
          studentData.id,
          studentData.sectionId,
          studentData.classId
        )
      );
    } catch (error) {}
    setIsCompletedRefreshing(false);
  }, [dispatch, setIsCompletedRefreshing]);

  //press group button
  const onPressButton = (item) => {
    console.log(item);
    if (item === 0) {
      loadUpcomingExam();
    } else if (item === 1) {
      loadCompletedExam();
    }
    setItemState(item);
  };

  //handle events
  const handleOnPressUpComingExam = (item) => {
    console.log(item);
    navigation.navigate(ROUTES.EXAM_UPCOMING_RESULT_DETAIL, {
      upComingExam: item,
    });
  };
  const handleOnPressUpCompletedExam = (data) => {
    console.log("Click");
    navigation.navigate(ROUTES.EXAM_COMPLETED_RESULT_DETAIL, {
      student: studentData,
      completedData: data,
    });
  };

  //render UI
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <Text medium color={COLORS.white} style={styles.title}>
          {studentData.name}
        </Text>
        <ButtonGroup
          buttons={["Upcoming", "Completed"]}
          onItemClick={onPressButton}
          buttonActive={
            itemState === 0
              ? styles.btnInactiveUpcoming
              : styles.btnInactiveCompleted
          }
          buttonInactive={styles.btnInActive}
          textActive={styles.textActive}
          textInActive={styles.textInActive}
        />
        {itemState === 0 ? (
          isRefreshing ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList
              onRefresh={loadUpcomingExam}
              refreshing={isRefreshing}
              data={upcomingExam}
              style={{ marginTop: MARGINS.m10 }}
              showsVerticalScrollIndicator={false}
              renderItem={(itemData) => (
                <UpComingExamItem
                  onItemClick={handleOnPressUpComingExam}
                  item={itemData.item}
                  navigation={navigation}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )
        ) : isCompletedRefreshing ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            onRefresh={loadCompletedExam}
            refreshing={isCompletedRefreshing}
            data={completedExam}
            style={{ marginTop: MARGINS.m10 }}
            showsVerticalScrollIndicator={false}
            renderItem={(itemData) => (
              <CompletedExamItem
                onItemClick={handleOnPressUpCompletedExam}
                item={itemData}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Exam;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  btnInActive: {
    flex: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  btnInactiveUpcoming: {
    flex: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: COLORS.black,
    backgroundColor: COLORS.leave,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  btnInactiveCompleted: {
    flex: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: COLORS.black,
    backgroundColor: COLORS.present,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: MARGINS.m12,
    marginBottom: MARGINS.m20,
  },
  card: {
    height: 68,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    justifyContent: "space-around",
    flex: 1,
    flexDirection: "row",
    marginBottom: MARGINS.m18,
  },
  textInActive: {
    color: COLORS.black,
  },
  textActive: {
    color: COLORS.white,
  },
});
