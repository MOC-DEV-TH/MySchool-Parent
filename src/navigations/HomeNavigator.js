import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  KidProfile,
  TimeTableAndRoutine,
  Exam,
  Notification,
  ExamCompletedResultDetail,
  ExamUpcomingResultDetail,
  PaymentHistory,
  Homework,
  Attendance,
  CalendarEvent,
  Profile,
  Billing,
  LeaveRequest,
  InvoiceDetail,
  PaymentPlatform,
  PrivacyPolicy,
  AboutMySchool,
  TermsAndConditions,
  Login,
  SendMessage,
  SendMessageHistory,
  Activity,
  ActivityImageGallery,
} from "../screens";
import { ROUTES, COLORS, IMGS } from "../constants";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { getData, setData } from "../utils/SessionManager";
import AppConstants from "../utils/AppConstants";
import React, { useEffect, useState, useCallback } from "react";
import SvgUri from "react-native-svg-uri";

const Stack = createStackNavigator();

function HomeNavigator() {
  const navigation = useNavigation();
  let [notiCount, setNotiCount] = useState("0");

  const HeaderImage = (props) => (
    <SvgUri width="40" height="40" source={IMGS.attendance_svg} />
  );

  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={({ route }) => ({
          headerTintColor: COLORS.white,
          headerBackTitle: "Back",
          headerBackTitleVisible: false,
          headerShown: false,
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
        name={ROUTES.EXAM_COMPLETED_RESULT_DETAIL}
        component={ExamCompletedResultDetail}
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
      <Stack.Screen
        name={ROUTES.EXAM_UPCOMING_RESULT_DETAIL}
        component={ExamUpcomingResultDetail}
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
        name={ROUTES.BILLING}
        component={Billing}
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
        name={ROUTES.LEAVE_REQUEST}
        component={LeaveRequest}
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
        name={ROUTES.INVOICE_DETAIL}
        component={InvoiceDetail}
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
        name={ROUTES.PAYMENT_PLATFORM}
        component={PaymentPlatform}
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
        name={ROUTES.PRIVACY_POLICY}
        component={PrivacyPolicy}
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
        name={ROUTES.TERMS_AND_CONDITIONS}
        component={TermsAndConditions}
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
        name={ROUTES.ABOUT_MY_SCHOOL}
        component={AboutMySchool}
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
        name={ROUTES.LOGIN}
        component={Login}
        options={{
          headerShown: false,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          headerTitle: () => <Image source={IMGS.logoWhiteSmall} />,
        }}
      />

      <Stack.Screen
        name={ROUTES.MESSAGE}
        component={SendMessage}
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
        name={ROUTES.MESSAGE_HISTORY}
        component={SendMessageHistory}
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
        name={ROUTES.ACTIVITY}
        component={Activity}
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
        name={ROUTES.ACTIVITY_GALLERY}
        component={ActivityImageGallery}
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
