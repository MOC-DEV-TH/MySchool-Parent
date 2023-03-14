import "react-native-gesture-handler";
import React, { useEffect, useState, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import { LogBox, ActivityIndicator } from "react-native";
import * as Device from "expo-device";
import { Platform } from "react-native";
import * as Notifications from "expo-notifications";
import { getData, setData } from "./src/utils/SessionManager";
import AppConstants from "./src/utils/AppConstants";
import DrawerNavigator from "./src/navigations/DrawerNavigator";
import AuthNavigator from "./src/navigations/AuthNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StartUpScreen } from "./src/screens";

LogBox.ignoreAllLogs();
const store = configureStore();
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [hasLaunched, setHasLaunched] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    const getAuthToken = async () => {
      const hasLaunch = await getData(AppConstants.KEY_AUTH_TOKEN);
      console.log("HashLaunched", hasLaunch);
      if (hasLaunch) {
        setHasLaunched(true);
      } else {
        await setData(AppConstants.KEY_AUTH_TOKEN, hasLaunch);
      }
    };

    getAuthToken().catch((error) => {
      console.log("Error", error);
    });
  }, []);

  useEffect(() => {
    AsyncStorage.clear();
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          {hasLaunched ? <DrawerNavigator /> : <AuthNavigator />}
          <StartUpScreen />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

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
    setData(AppConstants.KEY_EXPO_TOKEN, token);
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}
