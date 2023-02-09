import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "../constants";
import { COLORS } from "../constants";
import { StyleSheet, Platform, TouchableOpacity } from "react-native";
import { Home, Notification } from "../screens";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: COLORS.dark,
        //tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={Home}
        options={{
          tabBarLabel: "Home",
          title: "Home",
          headerShown: true,
        }}
      />
      <Tab.Screen
        name={ROUTES.NOTIFICATIONS}
        component={Notification}
        options={{
          tabBarLabel: "Notification",
          title: "Notification",
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    height: 92,
  },
});
