import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigations/AuthNavigator";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
        <AuthNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
