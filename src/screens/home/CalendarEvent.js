import { StyleSheet, View, Platform, FlatList } from "react-native";
import { Calendar } from "react-native-calendars";
import { COLORS, MARGINS, PADDINGS, IMGS } from "../../constants";
import Text from "@kaloraat/react-native-text";
import { useNavigation } from "@react-navigation/native";

const CalendarEvent = () => {
  const navigation = useNavigation();

  let markedDay = {};
  const calendar = [
    {
      date: "2023-02-16",
      type: "present",
      name: "Christmas",
      colorCode: "#A363A9",
    },
    {
      date: "2023-02-17",
      type: "present",
      name: "Karen New Year",
      colorCode: "#2B56AF",
    },
    {
      date: "2023-02-18",
      type: "absent",
      name: "Union Day",
      colorCode: "#96B245",
    },
  ];
  calendar.map((item) => {
    markedDay[item.date] = {
      customStyles: {
        container: {
          borderWidth: 0.7,
          borderColor: item.colorCode,
          backgroundColor: item.colorCode,
          opacity: 0.6,
          elevation:10
        },
        text: {
          color: "black",
          fontWeight: "bold",
          paddingTop: Platform.OS == "android" ? PADDINGS.p2 : undefined,
        },
      },
    };
  });

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: item.colorCode,
          padding: PADDINGS.p16,
          marginBottom: MARGINS.m12,
          borderRadius: 12,
        }}
      >
        <Text medium color={COLORS.white} style={{ fontWeight: "bold" }}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Calendar
        markingType={"custom"}
        style={{
          borderRadius: 6,
          marginTop: MARGINS.m16,
          marginBottom: MARGINS.m32,
        }}
        markedDates={markedDay}
      />

      <FlatList
        data={calendar}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CalendarEvent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
});
