import React, { useEffect, useCallback, useState } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { Calendar } from "react-native-calendars";
import { COLORS, MARGINS, PADDINGS } from "../../constants";
import Text from "@kaloraat/react-native-text";
import { useSelector, useDispatch } from "react-redux";
import * as calendarEventAction from "../../store/actions/calendarEvent";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { hex2rgba } from "../../utils/Hex2Rgba";

const CalendarEvent = () => {
  const dispatch = useDispatch();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const markedDay = {};

  //get all calendar event data
  const eventData = useSelector((state) => state.calendarEvent.calendarEvent);
  const mapData = useSelector((state) => state.calendarEvent.mapData);

  //initial load data
  useEffect(() => {
    loadCalendarEvent();
  }, []);

  //load calendar event data
  const loadCalendarEvent = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(calendarEventAction.getCalendarEvent());
    } catch (error) {}
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  //render footer item
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: item.color,
          padding: PADDINGS.p16,
          marginBottom: MARGINS.m12,
          borderRadius: 12,
        }}
      >
        <Text medium color={COLORS.white} style={{ fontWeight: "bold" }}>
          {item.event_name}
        </Text>
      </View>
    );
  };

  //map data to markedDate
  mapData.map((item) => {
    markedDay[item.date] = {
      customStyles: {
        container: {
          borderWidth: 1,
          borderColor: item.bgColor,
          backgroundColor: hex2rgba(item.bgColor,0.4),
          opacity: 0.8,
          elevation: 10,
        },
        text: {
          color: "black",
          opacity: 10,
        },
      },
    };
  });

  //render screen
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        {isRefreshing ? (
          <ActivityIndicator size="large" />
        ) : (
          <Calendar
            markingType={"custom"}
            markedDates={markedDay}
            style={{
              borderRadius: 6,
              marginTop: MARGINS.m16,
              marginBottom: MARGINS.m32,
            }}
          />
        )}
        <FlatList
          data={eventData}
          renderItem={(itemData) => renderItem(itemData)}
          keyExtractor={(item, index) => index.toString()}
        />
      </KeyboardAwareScrollView>
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
