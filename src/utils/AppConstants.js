import Config from "../constants/Config";

export default {
  XSRF_TOKEN:
    "eyJpdiI6IklVOFg4T0k5Mm5DVWR2Ylo5ZTBFN0E9PSIsInZhbHVlIjoiMzFRNGt6T3lTRUxwblg5UGptUXV0UmhOcldQWjhYdFdNZjZDV0hRUXdINGxKUlJna0VaZkhRTVNrVUNnNlprMTdvYjBvS21vQUkyc1lXWEMvMjJUejNDdGFuSE1QeHpmZUhPNVY1RVh5NEg4K2JURnJJTnF1Mk8zYm5mQWp5eGMiLCJtYWMiOiI2OGUwZjQwZjE2ZjMzYjI4OGI1NTk4NDZkMDJhMmIyNmQxODAzNDE1MTE3OWViOGI2ZTlmNzcwODg2YjVlZmZhIiwidGFnIjoiIn0=",
  LOGIN_STATUS_CODE: "000",

  LOGIN_URL: Config.APIServiceURL + "/loginmobile",
  GET_ALL_STUDENTS_URL: Config.APIServiceURL + "/parent/students/details",
  GET_ATTENDANCE_URL: Config.APIServiceURL + "/student-attendance-mobile/",
  GET_UPCOMING_EXAM_URL: Config.APIServiceURL + "/upcoming-exams-mobile",
  GET_UPCOMING_EXAM_DETAIL_URL: Config.APIServiceURL + "/exam-schedule-mobile",
  GET_PASSED_EXAM_URL: Config.APIServiceURL + "/complete-exam-results-mobile",
  GET_PASSED_EXAM_DETAIL_URL:
    Config.APIServiceURL + "/complete-exam-results-details-mobile",
  GET_CLASS_ROUTINE_URL: Config.APIServiceURL + "/get-timetables-mobile",
  GET_UPCOMING_CALENDAR_EVENT_URL:
    Config.APIServiceURL + "/upcoming-events-mobile",
  GET_PROFILE_DETAIL_URL: Config.APIServiceURL + "/guardian-profile-mobile",
  GET_HOMEWORK_URL: Config.APIServiceURL + "/homeworks-mobile/",
  GET_PAYMENT_HISTORY_URL: Config.APIServiceURL + "/payment-history-mobile/",
  GET_BILLING_HISTORY_URL: Config.APIServiceURL + "/billing-history-mobile/",
  GET_PAYMENT_DETAIL_URL: Config.APIServiceURL + "/payment-details-mobile/",
  GET_NOTIFICATION_URL: Config.APIServiceURL + "/notifications",
  POST_EXPO_TOKEN_TO_SERVER: Config.APIServiceURL + "/post-expo-token-mobile",
  POST_LEAVE_REQUEST: Config.APIServiceURL + "/post-leave-request-mobile",

  KEY_EXPO_TOKEN: "key_expo_token",
  KEY_AUTH_TOKEN: "key_auth_token",
  KEY_USER_DATA: "key_user_data",
  KEY_NOTIFICATION_COUNT: "key_notification_count",
  LAST_NOTI_COUNT: "Last noti count",
};

export const AUTHENTICATE = "AUTHENTICATE";
export const AUTHENTICATE_TOKEN = "AUTHENTICATE_TOKEN";
export const LOAD_HOME_LOADING = "LOGIN_LOADING";
export const LOGIN_LOADING = "LOAD_HOME_LOADING";
export const LOAD_HOME_SUCCESS = "LOAD_HOME_SUCCESS";
export const LOAD_HOME_ERROR = "LOAD_HOME_ERROR";
export const LOAD_HOME_STUDENT = "LOAD_HOME_STUDENT";
export const LOAD_NOTIFICATION_DATA = "LOAD_NOTIFICATION_DATA";
export const LOAD_COMPLETED_EXAM = "LOAD_COMPLETED_EXAM";
export const LOAD_COMPLETED_EXAM_DETAIL = "LOAD_COMPLETED_EXAM_DETAIL";
export const LOAD_UPCOMING_EXAM = "LOAD_UPCOMING_EXAM";
export const LOAD_UPCOMING_EXAM_DETAIL = "LOAD_UPCOMING_EXAM_DETAIL";
export const LOAD_UPCOMING_EVENT_CALENDAR = "LOAD_UPCOMING_EVENT_CALENDAR";
export const LOAD_UPCOMING_EVENT_MAP_DATA = "LOAD_UPCOMING_EVENT_MAP_DATA";
export const LOAD_CLASS_ROUTINE = "LOAD_CLASS_ROUTINE";
export const LOAD_PROFILE_DETAIL_DATA = "LOAD_PROFILE_DETAIL_DATA";
export const LOAD_HOMEWORK_DATA = "LOAD_HOMEWORK_DATA";
export const LOAD_PAYMENT_HISTORY_DATA = "LOAD_PAYMENT_HISTORY_DATA";
export const LOAD_BILLING_HISTORY_DATA = "LOAD_BILLING_HISTORY_DATA";
export const LOAD_PAYMENT_DETAIL = "LOAD_PAYMENT_DETAIL";
export const NOTIFICATION_RECEIVED = "NOTIFICATION_RECEIVED";
export const LOAD_STUDENT_ATTENDANCE_DATA = "LOAD_STUDENT_ATTENDANCE_DATA";

export const LOAD_ATTENDANCE_LOADING = "LOAD_ATTENDANCE_LOADING";
export const LOAD_ATTENDANCE_SUCCESS = "LOAD_ATTENDANCE_SUCCESS";
export const SET_INITIAL_LOAD = "SET_INITIAL_LOAD";
