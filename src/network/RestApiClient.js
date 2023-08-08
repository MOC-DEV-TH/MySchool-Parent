import AppConstants from "../utils/AppConstants";

export const RestClientApi = {
  login: async function (email, password, baseUrl) {
    const response = await fetch(baseUrl + AppConstants.LOGIN_URL, {
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

  getAllStudents: async function (token, baseUrl) {
    const response = await fetch(baseUrl + AppConstants.GET_ALL_STUDENTS_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  getUpComingEvent: async function (token, baseUrl) {
    const response = await fetch(
      baseUrl + AppConstants.GET_UPCOMING_CALENDAR_EVENT_URL,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  },

  getAttendanceStudent: async function (token, studentId, baseUrl) {
    const response = await fetch(
      baseUrl + AppConstants.GET_ATTENDANCE_URL + studentId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  },

  getUpComingExam: async function (token, baseUrl) {
    const response = await fetch(baseUrl + AppConstants.GET_UPCOMING_EXAM_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  },

  getUpcomingExamDetail: async function (
    sessionId,
    examId,
    class_id,
    section_id,
    token,
    baseUrl
  ) {
    console.log("AllID", sessionId, examId, class_id, section_id);
    const response = await fetch(
      baseUrl + AppConstants.GET_UPCOMING_EXAM_DETAIL_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          session_id: sessionId,
          exam_id: examId,
          class_id: class_id,
          section_id: section_id,
        }),
      }
    );
    return response.json();
  },

  getCompletedExam: async function (
    token,
    studentId,
    sectionId,
    classId,
    baseUrl
  ) {
    console.log("StudentID", studentId);
    const response = await fetch(baseUrl + AppConstants.GET_PASSED_EXAM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        student_id: studentId,
        class_id: classId,
        section_id: sectionId,
      }),
    });
    return response.json();
  },

  getCompletedExamDetail: async function (token, studentId, examId, baseUrl) {
    console.log("ExamId", examId);
    console.log("StudentId", studentId);
    const response = await fetch(
      baseUrl + AppConstants.GET_PASSED_EXAM_DETAIL_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          exam_id: examId,
          student_id: studentId,
        }),
      }
    );
    return response.json();
  },

  getClassRoutine: async function (
    sessionId,
    classId,
    sectionId,
    token,
    baseUrl
  ) {
    console.log("TimeTableUrl", AppConstants.GET_CLASS_ROUTINE_URL);
    const response = await fetch(baseUrl + AppConstants.GET_CLASS_ROUTINE_URL, {
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

  getCalendarEvent: async function (token, baseUrl) {
    const response = await fetch(
      baseUrl + AppConstants.GET_UPCOMING_CALENDAR_EVENT_URL,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  },

  getProfileDetail: async function (token, userId, baseUrl) {
    const response = await fetch(baseUrl + AppConstants.GET_USER_DETAIL_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  getHomework: async function (token, classId, sectionId, baseUrl) {
    const response = await fetch(
      baseUrl + AppConstants.GET_HOMEWORK_URL + classId + "/" + sectionId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  },

  getPaymentHistory: async function (token, studentId, baseUrl) {
    const response = await fetch(
      baseUrl + AppConstants.GET_PAYMENT_HISTORY_URL + studentId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  },

  getBillingHistory: async function (token, parentId, baseUrl) {
    const response = await fetch(
      baseUrl + AppConstants.GET_BILLING_HISTORY_URL + parentId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  },

  getPaymentDetail: async function (token, transactionId, baseUrl) {
    const response = await fetch(
      baseUrl + AppConstants.GET_PAYMENT_DETAIL_URL + transactionId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  },

  getAllNotification: async function (token, baseUrl) {
    const response = await fetch(baseUrl + AppConstants.GET_NOTIFICATION_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  postExpoToken: async function (Id, expoToken, token, baseUrl) {
    console.log("Post expo token to server", Id);
    const response = await fetch(
      baseUrl + AppConstants.POST_EXPO_TOKEN_TO_SERVER,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: Id,
          token: expoToken,
        }),
      }
    );
    return response.json();
  },

  postLeaveRequest: async function (
    studentId,
    title,
    desc,
    startDate,
    endDate,
    token,
    baseUrl
  ) {
    console.log("Post leaveRequest to server", studentId);
    const response = await fetch(baseUrl + AppConstants.POST_LEAVE_REQUEST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        student_id: studentId,
        title: title,
        descriptions: desc,
        start_date: startDate,
        end_date: endDate,
      }),
    });
    return response.json();
  },

  getSchoolCode: async function (schoolCode) {
    const response = await fetch(
      AppConstants.GET_SCHOOL_CODE_URL + schoolCode,
      {
        method: "GET",
      }
    );
    return response.json();
  },

  checkRequireUpdate: async function () {
    const response = await fetch(AppConstants.CHECK_REQUIRE_UPDATE, {
      method: "GET",
    });
    return response.json();
  },

  getExamResultRules: async function (token, baseUrl) {
    const response = await fetch(
      baseUrl + AppConstants.GET_EXAM_RESULT_RULE_URL,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return await response.json();
  },

  getTeacherDDLList: async function (token, classId, sectionId, baseUrl) {
    console.log("DDLRequest", classId, sectionId);
    const response = await fetch(
      baseUrl + AppConstants.GET_TEACHER_DDL_LIST + classId + "/" + sectionId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  },

  postMessage: async function (id, text, token, baseUrl) {
    console.log("Post message to server", id);
    const response = await fetch(baseUrl + AppConstants.POST_MESSAGE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        to_id: id,
        text: text,
      }),
    });
    return response.json();
  },
};
