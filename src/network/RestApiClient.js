// import { err } from "react-native-svg/lib/typescript/xml";
import AppConstants from "../utils/AppConstants";

export const RestClientApi = {
  login: async function (email, password) {
    const response = await fetch(AppConstants.LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": AppConstants.XSRF_TOKEN,
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    return response.json();
  },

  getAllStudents: async function (token) {
    const response = await fetch(AppConstants.GET_ALL_STUDENTS_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  getUpComingEvent: async function (token) {
    const response = await fetch(AppConstants.GET_UPCOMING_EVENTS_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  getAttendanceStudent: async function () {
    const response = await fetch(AppConstants.GET_ATTENDANCE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
    });
    return response.json();
  },

  getExamSchedule: async function () {
    const response = await fetch(AppConstants.GET_EXAM_SCHEDULE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
    });
    return response.json();
  },

  getExamScheduleDetail: async function () {
    const response = await fetch(AppConstants.GET_EXAM_SCHEDULE_DETAIL_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
    });
    return response.json();
  },

  getUpComingExam: async function (token) {
    const response = await fetch(AppConstants.GET_UPCOMING_EXAM_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  },

  getExamList: async function () {
    const response = await fetch(AppConstants.GET_EXAM_LIST_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
    });
    return response.json();
  },

  getCompletedExam: async function (token) {
    const response = await fetch(AppConstants.GET_PASSED_EXAM_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },
};
