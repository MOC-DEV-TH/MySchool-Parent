import Config from "../constants/Config";

export default {
  XSRF_TOKEN:
    "eyJpdiI6IklVOFg4T0k5Mm5DVWR2Ylo5ZTBFN0E9PSIsInZhbHVlIjoiMzFRNGt6T3lTRUxwblg5UGptUXV0UmhOcldQWjhYdFdNZjZDV0hRUXdINGxKUlJna0VaZkhRTVNrVUNnNlprMTdvYjBvS21vQUkyc1lXWEMvMjJUejNDdGFuSE1QeHpmZUhPNVY1RVh5NEg4K2JURnJJTnF1Mk8zYm5mQWp5eGMiLCJtYWMiOiI2OGUwZjQwZjE2ZjMzYjI4OGI1NTk4NDZkMDJhMmIyNmQxODAzNDE1MTE3OWViOGI2ZTlmNzcwODg2YjVlZmZhIiwidGFnIjoiIn0=",
  LOGIN_STATUS_CODE: 0,

  LOGIN_URL: Config.APIServiceURL + "/loginmobile",
  GET_ALL_STUDENTS_URL: Config.APIServiceURL + "/parent/students/details",
  GET_UPCOMING_EVENTS_URL: Config.APIServiceURL + "/calendars/upcoming-events",
  GET_ATTENDANCE_URL: Config.APIServiceURL + "/calendars/upcoming-events",
  GET_EXAM_SCHEDULE_URL: Config.APIServiceURL + "/exam-schedule/1",
  GET_EXAM_SCHEDULE_DETAIL_URL: Config.APIServiceURL + "/exams/1/schedules",
  GET_UPCOMING_EXAM_URL: Config.APIServiceURL + "/exams/upcoming-exams",
  GET_EXAM_LIST_URL: Config.APIServiceURL + "/exams/list",
  GET_PASSED_EXAM_URL: Config.APIServiceURL + "/exams/passed-exams",

  KEY_EXPO_TOKEN: "key_expo_token",
  KEY_AUTH_TOKEN: "key_auth_token",
};

export const AUTHENTICATE = "AUTHENTICATE";
export const LOAD_HOME_LOADING = "LOAD_HOME_LOADING";
export const LOAD_HOME_SUCCESS = "LOAD_HOME_SUCCESS";
export const LOAD_HOME_ERROR = "LOAD_HOME_ERROR";
export const LOAD_HOME_STUDENT = "LOAD_HOME_STUDENT";

export const LOAD_COMPLETED_EXAM = "LOAD_COMPLETED_EXAM";
export const LOAD_UPCOMING_EXAM = "LOAD_UPCOMING_EXAM";
