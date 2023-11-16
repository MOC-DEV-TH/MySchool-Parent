import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { COLORS, PADDINGS, MARGINS, ROUTES } from "../../constants";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HomeWorkItem from "../../components/ItemComponents/HomeWorkItem";
import { useSelector, useDispatch } from "react-redux";
import * as homeworkAction from "../../store/actions/homework";

const Homework = ({ route, navigation }) => {
  const { studentData } = route.params;
  const dispatch = useDispatch();
  const [isRefreshing, setIsRefreshing] = useState(false);

  //initial load data
  useEffect(() => {
    loadHomeworkData();
  }, []);

  //get homework  data
  const homeworkData = useSelector((state) => state.homework.homeworkData);

  //load homework  data
  const loadHomeworkData = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(
        homeworkAction.getAllHomeWork(
          studentData.classId,
          studentData.sectionId
        )
      );
    } catch (error) {}
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  //console.log("HomeWorkDataLength", homeworkData.length);

  //handle press item
  const handleOnPressHomeWorkItem = (item) => {
    //console.log(item);
    navigation.navigate(ROUTES.HOMEWORK_DETAIL, { homeWorkData: item });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Text medium color={COLORS.white} style={styles.title}>
          Homework
        </Text>
        <Text large color={COLORS.white} style={styles.name}>
          {studentData.name}
        </Text>
        <Text small color={COLORS.white} style={styles.small_text}>
          Class - {studentData.class_name}
        </Text>
        {isRefreshing ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={homeworkData}
            style={{ marginTop: MARGINS.m10 }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            inverted={true}
            renderItem={(itemData) => (
              <HomeWorkItem
                item={itemData}
                onItemClick={handleOnPressHomeWorkItem}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Homework;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  title: {
    fontWeight: "bold",
    alignItems: "flex-start",
    marginTop: MARGINS.m6,
    marginBottom: MARGINS.m12,
  },
  small_text: {
    alignItems: "flex-start",
    marginTop: MARGINS.m2,
    marginBottom: MARGINS.m12,
  },
  medium_text: {
    alignItems: "flex-start",
    marginTop: MARGINS.m18,
    marginBottom: MARGINS.m4,
  },
  name: {
    fontWeight: "bold",
    alignItems: "flex-start",
    marginTop: MARGINS.m2,
  },
});
