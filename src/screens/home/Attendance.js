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
import { hex2rgba } from "../../utils/Hex2Rgba";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Attendance = ({ route }) => {
  const { studentData } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [monthCountObj, setMonthCountObj] = useState({});
  let markedDay = {};

  //get attendance  data
  const allDateData = useSelector((state) => state.attendance.allDateData);
  const isLoading = useSelector((state) => state.attendance.loading);
  const totalDetail = useSelector((state) => state.attendance.totalDetail);
  const monthDataObj = useSelector((state) => state.attendance.monthDataObj);
  const attendanceData = useSelector(
    (state) => state.attendance.attendanceData
  );

  console.log("MonthCountObj", monthCountObj);

  //focus screen handler
  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      loadAttendanceData();
      setMonthCountObj({});
    });
    return focusHandler;
  }, [navigation]);

  //load attendance  data
  const loadAttendanceData = useCallback(async () => {
    try {
      await dispatch(attendanceAction.getStudentAttendance(studentData.id));
      console.log("LeaveCountObject", monthDataObj);
    } catch (error) {}
  }, [dispatch]);

  attendanceData.details.map((item) => {
    markedDay[item.date] = {
      customStyles: {
        container: {
          borderWidth: 0.7,
          borderColor:
            item.status.toString() == "1"
              ? COLORS.green
              : item.status.toString() == "0"
              ? COLORS.red
              : COLORS.leave,
          backgroundColor:
            item.status.toString() == "1"
              ? hex2rgba(COLORS.present, 0.4)
              : item.status.toString() == "0"
              ? hex2rgba(COLORS.absent, 0.4)
              : hex2rgba(COLORS.leave, 0.4),
          opacity: 0.8,
          elevation: 10,
        },
        text: {
          color: "black",
        },
      },
    };
  });

  console.log("MonthCountLength", Object.keys(monthCountObj).length);
  console.log("AttendanceData", attendanceData);

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
    navigation.push(ROUTES.LEAVE_REQUEST, { studentData: studentData });
  };

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: COLORS.black }}>
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
                  attendanceAction.getAttendanceCountByMonth(
                    month.month,
                    totalDetail
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
                count={
                  Object.keys(monthCountObj).length === 0
                    ? monthDataObj.present
                    : monthCountObj.present
                }
                style={styles.footerContainerPresent}
              />
              <FooterContainer
                label={"Absent"}
                count={
                  Object.keys(monthCountObj).length === 0
                    ? monthDataObj.absent
                    : monthCountObj.absent
                }
                style={styles.footerContainerAbsent}
              />
            </View>
            <FooterContainer
              label={"Leave"}
              count={
                Object.keys(monthCountObj).length === 0
                  ? monthDataObj.leave
                  : monthCountObj.leave
              }
              style={styles.footerContainerLeave}
            />
            <TouchableOpacity onPress={handleOnPressLeave}>
              <View style={styles.button}>
                <Text
                  medium
                  style={{ fontWeight: "bold" }}
                  color={COLORS.white}
                >
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
    </KeyboardAwareScrollView>
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
  footerContainerLeave: {
    borderRadius: 12,
    flex: 1,
    width: "50%",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: COLORS.leave,
    padding: PADDINGS.p10,
    marginLeft: MARGINS.m12,
    alignItems: "center",
    paddingTop: PADDINGS.p24,
    paddingBottom: PADDINGS.p24,
    marginTop: MARGINS.m24,
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
