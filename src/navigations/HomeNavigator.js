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
import { ROUTES, COLORS } from "../constants";
import { StyleSheet } from "react-native";
import React from "react";
import { LogoWhiteSvg } from "../assets";
import { TransitionPresets } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeNavigator() {
  //default navigation option
  const defaultNavOptions = {
    headerShown: true,
    headerTintColor: COLORS.white,
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: COLORS.bgColor,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    headerTitle: () => <HeaderImage />,
  };

  const HeaderImage = (props) => <LogoWhiteSvg />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
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
        options={defaultNavOptions}
      />
      <Stack.Screen
        name={ROUTES.TIME_TABLE_AND_ROUTINE}
        component={TimeTableAndRoutine}
        options={defaultNavOptions}
      />
      <Stack.Screen
        name={ROUTES.EXAM}
        component={Exam}
        options={defaultNavOptions}
      />
      <Stack.Screen
        name={ROUTES.NOTIFICATIONS}
        component={Notification}
        options={defaultNavOptions}
      />
      <Stack.Screen
        name={ROUTES.EXAM_COMPLETED_RESULT_DETAIL}
        component={ExamCompletedResultDetail}
        options={defaultNavOptions}
      />
      <Stack.Screen
        name={ROUTES.PAYMENT_HISTORY}
        component={PaymentHistory}
        options={defaultNavOptions}
      />

      <Stack.Screen
        name={ROUTES.HOMEWORK}
        component={Homework}
        options={defaultNavOptions}
      />

      <Stack.Screen
        name={ROUTES.ATTENDANCE}
        component={Attendance}
        options={defaultNavOptions}
      />

      <Stack.Screen
        name={ROUTES.CALENDAR_EVENT}
        component={CalendarEvent}
        options={defaultNavOptions}
      />
      <Stack.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={defaultNavOptions}
      />
      <Stack.Screen
        name={ROUTES.EXAM_UPCOMING_RESULT_DETAIL}
        component={ExamUpcomingResultDetail}
        options={defaultNavOptions}
      />
      <Stack.Screen
        name={ROUTES.BILLING}
        component={Billing}
        options={defaultNavOptions}
      />
      <Stack.Screen
        name={ROUTES.LEAVE_REQUEST}
        component={LeaveRequest}
        options={defaultNavOptions}
      />
      <Stack.Screen
        name={ROUTES.INVOICE_DETAIL}
        component={InvoiceDetail}
        options={defaultNavOptions}
      />
      <Stack.Screen
        name={ROUTES.PAYMENT_PLATFORM}
        component={PaymentPlatform}
        options={defaultNavOptions}
      />

      <Stack.Screen
        name={ROUTES.PRIVACY_POLICY}
        component={PrivacyPolicy}
        options={defaultNavOptions}
      />

      <Stack.Screen
        name={ROUTES.TERMS_AND_CONDITIONS}
        component={TermsAndConditions}
        options={defaultNavOptions}
      />

      <Stack.Screen
        name={ROUTES.ABOUT_MY_SCHOOL}
        component={AboutMySchool}
        options={defaultNavOptions}
      />

      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={defaultNavOptions}
      />

      <Stack.Screen
        name={ROUTES.MESSAGE}
        component={SendMessage}
        options={defaultNavOptions}
      />

      <Stack.Screen
        name={ROUTES.MESSAGE_HISTORY}
        component={SendMessageHistory}
        options={defaultNavOptions}
      />

      <Stack.Screen
        name={ROUTES.ACTIVITY}
        component={Activity}
        options={defaultNavOptions}
      />

      <Stack.Screen
        name={ROUTES.ACTIVITY_GALLERY}
        component={ActivityImageGallery}
        options={defaultNavOptions}
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
