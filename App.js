import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigations/AuthNavigator";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import * as Notifications from "expo-notifications";
import { initNotification } from "./src/service/NotificationService";
import DrawerNavigator from "./src/navigations/DrawerNavigator";
import { getData } from "./src/utils/SessionManager";
import AppConstants from "./src/utils/AppConstants";
import { LogBox } from "react-native";

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    initNotification();
    {
      getData(AppConstants.KEY_AUTH_TOKEN).then((value) => {
        console.log(value);
        if (value === null) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      });
    }
  }, []);
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          {/* {isAuthenticated ? <AuthNavigator /> : <DrawerNavigator />} */}
          <AuthNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
