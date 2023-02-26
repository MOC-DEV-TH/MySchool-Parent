import { LOAD_STUDENT_ATTENDANCE_DATA } from "../../utils/AppConstants";

const initialState = {
  attendanceData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STUDENT_ATTENDANCE_DATA:
      return {
        attendanceData: action.attendanceResponse,
      };
    default:
      return state;
  }
};
