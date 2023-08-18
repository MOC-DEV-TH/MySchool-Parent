import "react-native-gesture-handler";
import React, { useEffect, useState, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import { LogBox } from "react-native";
import * as Device from "expo-device";
import { Platform } from "react-native";
import * as Notifications from "expo-notifications";
import { getData, setData } from "./src/utils/SessionManager";
import AppConstants from "./src/utils/AppConstants";
import DrawerNavigator from "./src/navigations/DrawerNavigator";
import AuthNavigator from "./src/navigations/AuthNavigator";
import { StartUpScreen } from "./src/screens";
import * as SplashScreen from "expo-splash-screen";
import * as baseUrlAction from "./src/store/actions/baseUrl";

LogBox.ignoreAllLogs();
const store = configureStore();
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const notificationListener = useRef();
  const responseListener = useRef();
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const [appReady, setAppReady] = useState(false);
  const [user, setUser] = useState();

  //init notification
  useEffect(() => {
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
        setNotification(notification);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    getData(AppConstants.KEY_BASE_URL).then((baseUrl) => {
      store.dispatch(baseUrlAction.setBaseUrl(baseUrl));
    });
  });

  //check is auth
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        // Make any API calls you need to do here

        const user = await getData(AppConstants.KEY_AUTH_TOKEN);
        if (!user) return;

        setUser(user);
      } catch (e) {
        logger.log(e);
      } finally {
        // Tell the application to render
        setAppReady(true);
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!appReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          {user ? <DrawerNavigator /> : <AuthNavigator />}
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
      importance: Notifications.AndroidImportance.DEFAULT,
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
      console.log("finalStatus", status);
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      alert('Failed to get push token for push notification!');
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
