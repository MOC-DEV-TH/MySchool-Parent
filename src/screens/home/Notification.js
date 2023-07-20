import { StyleSheet, FlatList, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import Text from "@kaloraat/react-native-text";
import { COLORS, MARGINS, PADDINGS } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import * as notificationAction from "../../store/actions/notification";

const Notification = (props) => {
  const dispatch = useDispatch();
  const [isRefreshing, setIsRefreshing] = useState(false);

  //initial load data
  useEffect(() => {
    loadNotificationData();
  }, []);

  //get notification  data
  const notificationData = useSelector(
    (state) => state.notification.notificationData
  );

  //load notification data
  const loadNotificationData = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(notificationAction.getAllNotification());
    } catch (error) {}
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  console.log("NotificationLength", notificationData.length);

  const renderNotificationItems = ({ item }) => {
    return (
      <View style={styles.noti}>
        <Text style={{ fontWeight: "bold" }}>{item.data.subject}</Text>
        <Text>{item.data.body}</Text>
        <Text style={{ opacity: 0.5 }}>{item.created_ago}</Text>
      </View>
    );
  };

  //render UI
  return (
    <View style={styles.container}>
      <Text medium style={styles.text}>
        Notifications
      </Text>
      {isRefreshing ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={notificationData}
          style={{ marginTop: MARGINS.m10 }}
          showsVerticalScrollIndicator={false}
          renderItem={renderNotificationItems}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    padding: PADDINGS.p10,
  },
  noti: {
    backgroundColor: COLORS.grayLight,
    borderRadius: 12,
    alignItems: "flex-start",
    marginBottom: MARGINS.m20,
    paddingLeft: PADDINGS.p16,
    paddingTop: PADDINGS.p16,
    paddingBottom: PADDINGS.p16,
    paddingRight: PADDINGS.p16,
  },
  text: {
    fontWeight: "bold",
    marginTop: MARGINS.m8,
    marginBottom: MARGINS.m8,
    color: COLORS.white,
  },
});
