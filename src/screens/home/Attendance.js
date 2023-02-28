import {
  StyleSheet,
  View,
  Platform,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { Calendar } from "react-native-calendars";
import { COLORS, MARGINS, PADDINGS, IMGS, ROUTES } from "../../constants";
import Text from "@kaloraat/react-native-text";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import * as attendanceAction from "../../store/actions/attendance";

const Attendance = ({ route }) => {
  const { studentData } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [monthCountObj, setMonthCountObj] = useState({});
  let markedDay = {};

  //initial load data
  useEffect(() => {
    loadAttendanceData();
    setMonthCountObj(
      attendanceAction.getAttendanceByMonth(
        attendanceData.current_month,
        attendanceData.total_details
      )
    );
  }, []);

  //get attendance  data
  const attendanceData = useSelector(
    (state) => state.attendance.attendanceData
  );
  const isLoading = useSelector((state) => state.attendance.loading);

  //load attendance  data
  const loadAttendanceData = useCallback(async () => {
    try {
      await dispatch(attendanceAction.getStudentAttendance(studentData.id));
    } catch (error) {}
  }, [dispatch]);

  console.log("AttendanceData", attendanceData.details);

  attendanceData.details.map((item) => {
    markedDay[item.date] = {
      customStyles: {
        container: {
          borderWidth: 0.7,
          borderColor:
            item.status.toString() == "true"
              ? COLORS.green
              : item.status.toString() == "false"
              ? COLORS.red
              : COLORS.yellow,
          backgroundColor:
            item.status.toString() == "true"
              ? COLORS.present
              : item.status.toString() == "false"
              ? COLORS.absent
              : COLORS.leave,
          opacity: 0.6,
          elevation: 10,
        },
        text: {
          color: "black",
          fontWeight: "bold",
        },
      },
    };
  });

  const FooterContainer = ({ style, label, count }) => {
    return (
      <View style={style}>
        <Text
          medium
          color={COLORS.white}
          style={{ fontWeight: "bold", marginBottom: MARGINS.m10 }}
        >
          {label}
        </Text>
        <View style={styles.circle}>
          <Text
            color={label == "Present" ? COLORS.green : COLORS.absent}
            style={{ fontWeight: "bold" }}
          >
            {count}
          </Text>
        </View>
      </View>
    );
  };

  const handleOnPressLeave = () => {
    navigation.navigate(ROUTES.LEAVE_REQUEST);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <Calendar
            markingType={"custom"}
            style={{
              borderRadius: 6,
              marginTop: MARGINS.m16,
            }}
            markedDates={markedDay}
            onMonthChange={(month) => {
              console.log("month changed", month.month);
              setMonthCountObj(
                attendanceAction.getAttendanceByMonth(
                  month.month,
                  attendanceData.total_details
                )
              );
            }}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: MARGINS.m28,
            }}
          >
            <FooterContainer
              label={"Present"}
              count={monthCountObj.present}
              style={styles.footerContainerPresent}
            />
            <FooterContainer
              label={"Absent"}
              count={monthCountObj.absent}
              style={styles.footerContainerAbsent}
            />
          </View>
          <TouchableOpacity onPress={handleOnPressLeave}>
            <View style={styles.button}>
              <Text medium style={{ fontWeight: "bold" }} color={COLORS.white}>
                Submit Leave
              </Text>
              <Image
                source={IMGS.arrow_right_white}
                style={{ marginLeft: MARGINS.m10 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  footerContainerPresent: {
    borderRadius: 12,
    backgroundColor: COLORS.present,
    padding: PADDINGS.p10,
    paddingTop: PADDINGS.p24,
    paddingBottom: PADDINGS.p24,
    flex: 0.5,
    marginRight: MARGINS.m12,
    alignItems: "center",
  },
  footerContainerAbsent: {
    borderRadius: 12,
    backgroundColor: COLORS.absent,
    padding: PADDINGS.p10,
    flex: 0.5,
    marginLeft: MARGINS.m12,
    alignItems: "center",
    paddingTop: PADDINGS.p24,
    paddingBottom: PADDINGS.p24,
  },
  circle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: COLORS.leave,
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 12,
    marginTop: MARGINS.m30,
    padding: PADDINGS.p16,
    justifyContent: "center",
  },
});
