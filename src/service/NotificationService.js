import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";
import { setData } from "../utils/SessionManager";
import AppConstants from "../utils/AppConstants";

const registerForPushNotificationsAsync = async () => {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("ExpoToken::::" + token);
    setData(AppConstants.KEY_EXPO_TOKEN, token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
};

export const initNotification = () => {
  registerForPushNotificationsAsync();

  const backgroundSubscription =
    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

  const foregroundSubscription = Notifications.addNotificationReceivedListener(
    (notification) => {
      console.log(notification);
    }
  );

  return () => {
    backgroundSubscription.remove();
    foregroundSubscription.remove();
  };
};
