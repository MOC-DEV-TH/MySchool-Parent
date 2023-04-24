import {
  StyleSheet,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { COLORS, PADDINGS, MARGINS, IMGS } from "../../constants";
import Text from "@kaloraat/react-native-text";
import { useSelector, useDispatch } from "react-redux";
import * as upComingExamDetailAction from "../../store/actions/upComingExamDetail";

const ExamUpcomingResultDetail = ({ route, navigation }) => {
  const { upComingExam } = route.params;
  console.log(upComingExam);

  const dispatch = useDispatch();
  const [isRefreshing, setIsRefreshing] = useState(false);

  //get all upcoming detail data
  const upComingExamDetailData = useSelector(
    (state) => state.upComingExamDetail.upcomingExamDetailData
  );

  //initial load data
  useEffect(() => {
    loadUpcomingExamDetail();
  }, []);

  //load upcomingExamData
  const loadUpcomingExamDetail = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(
        upComingExamDetailAction.getUpcomingExamDetail(
          upComingExam.sessionId,
          upComingExam.id
        )
      );
    } catch (error) {}
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  console.log("DetailData", upComingExamDetailData.length);

  //render item
  const renderUpcomingItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 0.4 }}
        >
          <Image source={IMGS.timeTable} />
        </View>
        <View style={{ justifyContent: "center", flex: 0.6 }}>
          <Text>{item.examDate}</Text>
          <Text color={COLORS.black} style={{ fontWeight: "bold" }}>
            {item.name}
          </Text>
          <Text>{item.duration}</Text>
        </View>
      </View>
    );
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

  return (
    <View style={styles.container}>
      <Text medium color={COLORS.white} style={styles.title}>
        {upComingExam.name}
      </Text>
      {isRefreshing ? (
        <ActivityIndicator size="large" />
      ) : (
        <View
          style={{
            backgroundColor:
              upComingExamDetailData.length === 0 ? COLORS.black : COLORS.white,
            borderRadius: 12,
          }}
        >
          <FlatList
            data={upComingExamDetailData}
            style={{ marginTop: MARGINS.m10 }}
            showsVerticalScrollIndicator={false}
            renderItem={(itemData) => renderUpcomingItem(itemData)}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={FlatListItemSeparator}
          />
        </View>
      )}
    </View>
  );
};

export default ExamUpcomingResultDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  card: {
    borderRadius: 12,
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingTop: PADDINGS.p10,
    paddingBottom: PADDINGS.p10,
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: MARGINS.m12,
    marginBottom: MARGINS.m20,
  },
});
