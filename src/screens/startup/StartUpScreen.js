import { StyleSheet } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import * as Notifications from "expo-notifications";
import * as notificationActions from "../../store/actions/notification";
import { useDispatch, useSelector } from "react-redux";
import { getData, setData } from "../../utils/SessionManager";
import AppConstants from "../../utils/AppConstants";
const BACKGROUND_NOTIFICATION_TASK = "BACKGROUND-NOTIFICATION-TASK";

const StartUpScreen = (props) => {
  const dispatch = useDispatch();
  const responseListener = useRef();

  useEffect(() => {
    // register task to run whenever is received while the app is in the background
    Notifications.registerTaskAsync(BACKGROUND_NOTIFICATION_TASK);

    // listener triggered whenever a notification is received while the app is in the foreground
    const foregroundReceivedNotificationSubscription =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log("Noti");
        handleNewNotification(notification.request.trigger.remoteMessage);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("Noti Recieved");
      });

    return () => {
      foregroundReceivedNotificationSubscription.remove();
      Notifications.removeNotificationSubscription(responseListener.current);
      Notifications.unregisterTaskAsync(BACKGROUND_NOTIFICATION_TASK);
    };
  }, []);

  //handle Notification Data
  const handleNewNotification = async () => {
    try {
      getData(AppConstants.KEY_NOTIFICATION_COUNT).then((count) => {
        dispatch(
          notificationActions.receiveNotification(
            (parseInt(count) + 1).toString()
          )
        );
        setData(
          AppConstants.KEY_NOTIFICATION_COUNT,
          (parseInt(count) + 1).toString()
        );
      });
      await Notifications.setBadgeCountAsync(1);
    } catch (error) {
      console.error(error);
    }
  };

  return ;
};

export default StartUpScreen;

const styles = StyleSheet.create({});
