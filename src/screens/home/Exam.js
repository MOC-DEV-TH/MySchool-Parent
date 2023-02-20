import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import ButtonGroup from "../../components/UI/ButtonGroup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Text from "@kaloraat/react-native-text";
import { COLORS, PADDINGS, MARGINS, IMGS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import UpComingExamItem from "../../components/ItemComponents/UpComingExamItem";
import CompletedExamItem from "../../components/ItemComponents/CompletedExamItem";
import { useSelector, useDispatch } from "react-redux";
import * as examActions from "../../store/actions/exam";
import { getData } from "../../utils/SessionManager";
import AppConstants from "../../utils/AppConstants";

const Exam = () => {
  const navigation = useNavigation();
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

  const loadUpcomingExam = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(
        examActions.getAllUpcomingExam(
          "9|qBzjpK8gw9qNQBHrw7JpnvtDcOumaElQ930WeuL3"
        )
      );
    } catch (error) {}
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  const loadCompletedExam = useCallback(async () => {
    setIsCompletedRefreshing(true);
    try {
      await dispatch(
        examActions.getAllCompletedExam(
          "9|qBzjpK8gw9qNQBHrw7JpnvtDcOumaElQ930WeuL3"
        )
      );
    } catch (error) {}
    setIsCompletedRefreshing(false);
  }, [dispatch, setIsCompletedRefreshing]);

  const onPressButton = (item) => {
    console.log(item);
    getData(AppConstants.KEY_AUTH_TOKEN).then((value) => {
      if (item === 0) {
        loadUpcomingExam();
      } else if (item === 1) {
        loadCompletedExam();
      }
    });

    setItemState(item);
  };
  const handleOnPressUpComingExam = () => {
    navigation.navigate(ROUTES.EXAM_UPCOMING_RESULT_DETAIL);
  };
  const handleOnPressUpCompletedExam = () => {
    navigation.navigate(ROUTES.EXAM_COMPLETED_RESULT_DETAIL);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <Text medium color={COLORS.white} style={styles.title}>
          Mya Mya
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
              renderItem={() => (
                <UpComingExamItem onPress={handleOnPressUpComingExam} />
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
                onPress={handleOnPressUpCompletedExam}
                examStatus={examActions.getExamStatus(itemData.item.mark)}
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
