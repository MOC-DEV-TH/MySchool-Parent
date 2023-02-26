import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_STUDENT_ATTENDANCE_DATA } from "../../utils/AppConstants";

export const getStudentAttendance = (studentId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    await RestClientApi.getAttendanceStudent(token, studentId).then(
      (response) => {
        console.log("AttendanceResponse", response);
        dispatch({
          type: LOAD_STUDENT_ATTENDANCE_DATA,
          attendanceResponse: response,
        });
      }
    );
  };
};
