import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  KidProfile,
  TimeTableAndRoutine,
  Exam,
  Notification,
  ExamResultDetail,
  PaymentHistory,
  Homework,
  Attendance,
  CalendarEvent,
  Profile
} from "../screens";
import { ROUTES, COLORS, IMGS } from "../constants";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

function HomeNavigator() {
  const navigation = useNavigation();

  const handleOnPressMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const handleOnPressNotification = () => {
    navigation.navigate(ROUTES.NOTIFICATIONS);
  };

  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={({ route }) => ({
          headerTintColor: COLORS.white,
          headerBackTitle: "Back",
          headerBackTitleVisible: false,
          headerShown: true,
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
                width: "100%",
              }}
            >
              <TouchableOpacity onPress={handleOnPressMenu}>
                <Ionicons name="menu" size={20} color={COLORS.white} />
              </TouchableOpacity>
              <Image source={IMGS.logoWhiteSmall} style={styles.appIcon} />
              <TouchableOpacity onPress={handleOnPressNotification}>
                <Ionicons name="notifications" size={20} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name={ROUTES.KID_PROFILE}
        component={KidProfile}
        options={{
          headerShown: true,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.bgColor,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
          headerTitle: () => <Image source={IMGS.logoWhiteSmall} />,
        }}
      />
      <Stack.Screen
        name={ROUTES.TIME_TABLE_AND_ROUTINE}
        component={TimeTableAndRoutine}
        options={{
          headerShown: true,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          headerTitle: () => <Image source={IMGS.logoWhiteSmall} />,
        }}
      />
      <Stack.Screen
        name={ROUTES.EXAM}
        component={Exam}
        options={{
          headerShown: true,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          headerTitle: () => <Image source={IMGS.logoWhiteSmall} />,
        }}
      />
      <Stack.Screen
        name={ROUTES.NOTIFICATIONS}
        component={Notification}
        options={{
          headerShown: true,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          headerTitle: () => <Image source={IMGS.logoWhiteSmall} />,
        }}
      />
      <Stack.Screen
        name={ROUTES.EXAM_RESULT_DETAIL}
        component={ExamResultDetail}
        options={{
          headerShown: true,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          headerTitle: () => <Image source={IMGS.logoWhiteSmall} />,
        }}
      />
      <Stack.Screen
        name={ROUTES.PAYMENT_HISTORY}
        component={PaymentHistory}
        options={{
          headerShown: true,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          headerTitle: () => <Image source={IMGS.logoWhiteSmall} />,
        }}
      />

      <Stack.Screen
        name={ROUTES.HOMEWORK}
        component={Homework}
        options={{
          headerShown: true,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          headerTitle: () => <Image source={IMGS.logoWhiteSmall} />,
        }}
      />

      <Stack.Screen
        name={ROUTES.ATTENDANCE}
        component={Attendance}
        options={{
          headerShown: true,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          headerTitle: () => <Image source={IMGS.logoWhiteSmall} />,
        }}
      />

      <Stack.Screen
        name={ROUTES.CALENDAR_EVENT}
        component={CalendarEvent}
        options={{
          headerShown: true,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          headerTitle: () => <Image source={IMGS.logoWhiteSmall} />,
        }}
      />
      <Stack.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          headerShown: true,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          headerTitle: () => <Image source={IMGS.logoWhiteSmall} />,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;

const styles = StyleSheet.create({
  appIcon: {
    alignSelf: "center",
    alignItems: "center",
  },
});
