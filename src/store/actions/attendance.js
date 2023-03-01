import { RestClientApi } from "../../network/RestApiClient";
import {
  LOAD_ATTENDANCE_LOADING,
  LOAD_STUDENT_ATTENDANCE_DATA,
  SET_INITIAL_LOAD,
} from "../../utils/AppConstants";

export const getStudentAttendance = (studentId) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOAD_ATTENDANCE_LOADING });
    const token = getState().auth.token;
    console.log(token);
    await RestClientApi.getAttendanceStudent(token, studentId).then(
      (response) => {
        const allDateArray = response.details;
        const leaveDateArray = [];

        let monthObj = {};
        if (response.current_month == 1) {
          monthObj = response.total_details.Jan;
        } else if (response.current_month == 2) {
          monthObj = response.total_details.Feb;
        } else if (response.current_month == 3) {
          monthObj = response.total_details.March;
        } else if (response.current_month == 4) {
          monthObj = response.total_details.April;
        } else if (response.current_month == 5) {
          monthObj = response.total_details.May;
        } else if (response.current_month == 6) {
          monthObj = response.total_details.June;
        } else if (response.current_month == 7) {
          monthObj = response.total_details.July;
        } else if (response.current_month == 8) {
          monthObj = response.total_details.Aug;
        } else if (response.current_month == 9) {
          monthObj = response.total_details.Sep;
        } else if (response.current_month == 10) {
          monthObj = response.total_details.Oct;
        } else if (response.current_month == 11) {
          monthObj = response.total_details.Nov;
        } else {
          monthObj = response.total_details.Dec;
        }

        for (const data of response.leaves) {
          const diffTime = Math.abs(
            new Date(data.start_date) - new Date(data.end_date)
          );
          const diffDays = 0 | (diffTime / 864e5);
          for (let i = 0; i <= diffDays; i++) {
            const newDate = new Date(
              new Date(data.start_date).getTime() + i * 864e5
            );

            var year = newDate.getFullYear();
            var month = String(newDate.getMonth() + 1).padStart(2, "0");
            var date = String(newDate.getDate()).padStart(2, "0");

            leaveDateArray.push({
              date: year + "-" + month + "-" + date,
              status: "leave",
              month: "leave month",
            });
          }
        }

        allDateArray.push(...leaveDateArray);

        dispatch({
          type: LOAD_STUDENT_ATTENDANCE_DATA,
          totalDetail: response.total_details,
          attendanceResponse: response,
          currentMonth: response.current_month,
          allDateData: allDateArray,
          monthDataObj: monthObj,
        });
      }
    );
  };
};

export const initialState = () => {
  return (dispatch) => {
    dispatch({
      type: SET_INITIAL_LOAD,
    });
  };
};

export const getAttendanceCountByMonth = (monthIndex, monthObj) => {
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
