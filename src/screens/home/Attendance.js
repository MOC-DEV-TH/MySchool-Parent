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
  const [isRefreshing, setIsRefreshing] = useState(false);
  let markedDay = {};

  //initial load data
  useEffect(() => {
    loadAttendanceData();
  }, []);

  //get attendance  data
  const attendanceData = useSelector(
    (state) => state.attendance.attendanceData
  );

  //load attendance  data
  const loadAttendanceData = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(attendanceAction.getStudentAttendance(studentData.id));
    } catch (error) {}
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  console.log("AttendanceData", attendanceData);

  const [calendar, setCalender] = useState([
    { date: "2023-02-16", type: "present" },
    { date: "2023-02-17", type: "present" },
    { date: "2023-02-18", type: "absent" },
    { date: "2023-02-19", type: "absent" },
    { date: "2023-02-22", type: "leave" },
    { date: "2023-02-23", type: "leave" },
  ]);

  calendar.map((item) => {
    markedDay[item.date] = {
      customStyles: {
        container: {
          borderWidth: 0.7,
          borderColor:
            item.type == "present"
              ? COLORS.green
              : item.type == "absent"
              ? COLORS.red
              : COLORS.yellow,
          backgroundColor:
            item.type == "present"
              ? COLORS.present
              : item.type == "absent"
              ? COLORS.absent
              : COLORS.leave,
          opacity: 0.6,
          elevation: 10,
        },
        text: {
          color: "black",
          fontWeight: "bold",
          paddingTop: Platform.OS == "android" ? PADDINGS.p2 : undefined,
        },
      },
    };
  });
  //console.log("markedDay", markedDay);

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
          <Text color={COLORS.green} style={{ fontWeight: "bold" }}>
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
      {isRefreshing ? (
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
              count={"12"}
              style={styles.footerContainerPresent}
            />
            <FooterContainer
              label={"Absent"}
              count={"14"}
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
