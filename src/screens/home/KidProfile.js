import { StyleSheet, View } from "react-native";
import React, { useEffect, useCallback } from "react";
import { COLORS, IMGS, MARGINS, PADDINGS, ROUTES } from "../../constants";
import CardItem from "../../components/UI/CardItem";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as attendanceAction from "../../store/actions/attendance";
import { useDispatch, useSelector } from "react-redux";
import { AttendanceSvg, ExamSvg, HomeworkSvg, MessageSvg, PaymentHistorySvg, TimeTableSvg } from "../../assets";

const KidProfile = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { studentData } = route.params;
  console.log(studentData.name);
  console.log(studentData.id);

  //get auth token
  const baseUrl = useSelector((state) => state.baseURL.baseUrl);
  console.log("BaseUrl", baseUrl);
  useEffect(() => {
    loadAttendanceData();
  }, []);

  const loadAttendanceData = useCallback(async () => {
    try {
      await dispatch(attendanceAction.getStudentAttendance(studentData.id));
    } catch (error) {}
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <Text medium color={COLORS.white} style={styles.title}>
          {studentData.name}
        </Text>
        <CardItem
          name={"Attendance"}
          imageName={<AttendanceSvg />}
          navigateName={ROUTES.ATTENDANCE}
          navigation={navigation}
          routeData={studentData}
        />
        <CardItem
          name={"Time Table"}
          imageName={<TimeTableSvg />}
          navigateName={ROUTES.TIME_TABLE_AND_ROUTINE}
          navigation={navigation}
          routeData={studentData}
        />
        <CardItem
          name={"Exams"}
          imageName={<ExamSvg />}
          navigateName={ROUTES.EXAM}
          navigation={navigation}
          routeData={studentData}
        />
        <CardItem
          name={"Payment History"}
          imageName={<PaymentHistorySvg />}
          navigateName={ROUTES.PAYMENT_HISTORY}
          navigation={navigation}
          routeData={studentData}
        />
        <CardItem
          name={"Homework"}
          imageName={<HomeworkSvg />}
          navigateName={ROUTES.HOMEWORK}
          navigation={navigation}
          routeData={studentData}
        />
        <CardItem
          name={"Message"}
          imageName={<MessageSvg />}
          navigateName={ROUTES.MESSAGE}
          navigation={navigation}
          routeData={studentData}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default KidProfile;

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
});
