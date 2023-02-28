import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_ATTENDANCE_LOADING, LOAD_STUDENT_ATTENDANCE_DATA } from "../../utils/AppConstants";


export const getStudentAttendance = (studentId) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOAD_ATTENDANCE_LOADING });
    const token = getState().auth.token;
    console.log(token)
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

export const getAttendanceByMonth = (monthIndex, monthObj) => {
  let result = {};
  if (monthIndex == 1) {
    result = monthObj.Jan;
  } else if (monthIndex == 2) {
    result = monthObj.Feb;
  } else if (monthIndex == 3) {
    result = monthObj.March;
  } else if (monthIndex == 4) {
    result = monthObj.April;
  } else if (monthIndex == 5) {
    result = monthObj.May;
  } else if (monthIndex == 6) {
    result = monthObj.June;
  } else if (monthIndex == 7) {
    result = monthObj.July;
  } else if (monthIndex == 8) {
    result = monthObj.Aug;
  } else if (monthIndex == 9) {
    result = monthObj.Sep;
  } else if (monthIndex == 10) {
    result = monthObj.Oct;
  } else if (monthIndex == 11) {
    result = monthObj.Nov;
  } else {
    result = monthObj.Dec;
  }

  return result;
};
