import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "../constants";
import { COLORS } from "../constants";
import { StyleSheet } from "react-native";
import { Home, Notification } from "../screens";
import Icon from 'react-native-vector-icons/Ionicons';

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
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused ? 'notifications' : 'md-notifications-outline';
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={Home}
        options={{
          tabBarLabel: "Home",
          title: "Home",
          headerShown: false,
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
