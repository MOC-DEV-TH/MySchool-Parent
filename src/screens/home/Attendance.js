import {
  StyleSheet,
  View,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { COLORS, MARGINS, PADDINGS, IMGS } from "../../constants";
import Text from "@kaloraat/react-native-text";
import { useNavigation } from "@react-navigation/native";

const Attendance = () => {
  const navigation = useNavigation();

  let markedDay = {};
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
          opacity: 0.7,
        },
        text: {
          color: "black",
          fontWeight: "bold",
          paddingTop: Platform.OS == "android" ? PADDINGS.p2 : undefined,
        },
      },
    };
  });

  const handleOnPressLeave = () => {};

  return (
    <View style={styles.container}>
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
        <View style={styles.footerContainerPresent}>
          <Text
            medium
            color={COLORS.white}
            style={{ fontWeight: "bold", marginBottom: MARGINS.m10 }}
          >
            Present
          </Text>
          <View style={styles.circle}>
            <Text color={COLORS.green} style={{ fontWeight: "bold" }}>
              12
            </Text>
          </View>
        </View>
        <View style={styles.footerContainerAbsent}>
          <Text
            medium
            color={COLORS.white}
            style={{ fontWeight: "bold", marginBottom: MARGINS.m10 }}
          >
            Absent
          </Text>
          <View style={styles.circle}>
            <Text color={COLORS.red} style={{ fontWeight: "bold" }}>
              12
            </Text>
          </View>
        </View>
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
    paddingTop: PADDINGS.p22,
    paddingBottom: PADDINGS.p22,
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
    paddingTop: PADDINGS.p22,
    paddingBottom: PADDINGS.p22,
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
    padding: PADDINGS.p20,
    justifyContent: "center",
  },
});
