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

  getCompletedExam: async function (token, studentId) {
    console.log("StudentID", studentId);
    const response = await fetch(AppConstants.GET_PASSED_EXAM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        student_id: 6,
      }),
    });
    return response.json();
  },

  getCompletedExamDetail: async function (token, studentId, examId) {
    console.log("StudentID", studentId);
    const response = await fetch(AppConstants.GET_PASSED_EXAM_DETAIL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        exam_id: examId,
        student_id: studentId,
      }),
    });
    return response.json();
  },

  getClassRoutine: async function (sessionId, classId, sectionId, token) {
    console.log("TimeTableUrl", AppConstants.GET_CLASS_ROUTINE_URL);
    const response = await fetch(AppConstants.GET_CLASS_ROUTINE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        session_id: sessionId,
        class_id: classId,
        section_id: sectionId,
      }),
    });
    return response.json();
  },

  getUpcomingExamDetail: async function (sessionId, examId, token) {
    const response = await fetch(AppConstants.GET_UPCOMING_EXAM_DETAIL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        session_id: sessionId,
        exam_id: examId,
      }),
    });
    return response.json();
  },

  getCalendarEvent: async function (token) {
    const response = await fetch(AppConstants.GET_UPCOMING_CALENDAR_EVENT_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  getProfileDetail: async function (token) {
    const response = await fetch(AppConstants.GET_PROFILE_DETAIL_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  getHomework: async function (token) {
    const response = await fetch(AppConstants.GET_HOMEWORK_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  getPaymentHistory: async function (token) {
    const response = await fetch(AppConstants.GET_PAYMENT_HISTORY_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  getBillingHistory: async function (token) {
    const response = await fetch(AppConstants.GET_BILLING_HISTORY_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

};

