import { StyleSheet } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import AuthNavigator from "../../navigations/AuthNavigator";
import DrawerNavigator from "../../navigations/DrawerNavigator";
import * as Notifications from "expo-notifications";
import * as notificationActions from "../../store/actions/notification";
import { useDispatch, useSelector } from "react-redux";
import { getData, setData } from "../../utils/SessionManager";
import AppConstants from "../../utils/AppConstants";
const BACKGROUND_NOTIFICATION_TASK = "BACKGROUND-NOTIFICATION-TASK";

const StartUpScreen = (props) => {
  console.log("AuthStatus",props.authStatus)
  const dispatch = useDispatch();
  const responseListener = useRef();

  //get notification count
  const notificationCount = useSelector(
    (state) => state.notification.notificationCount
  );

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
        console.log("Store Notification Count::", count);
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

  return !props.authStatus ? <AuthNavigator/> : <DrawerNavigator/> 
};

export default StartUpScreen;

const styles = StyleSheet.create({});
