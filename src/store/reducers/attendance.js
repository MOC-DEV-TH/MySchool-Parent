import { LOAD_ATTENDANCE_LOADING, LOAD_STUDENT_ATTENDANCE_DATA } from "../../utils/AppConstants";

const initialState = {
  attendanceData: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STUDENT_ATTENDANCE_DATA:
      return {
        attendanceData: action.attendanceResponse,
        loading: false,
      };
      case LOAD_ATTENDANCE_LOADING: {
        return {
          ...state,
          loading: true,
          error: "",
        };
      }
     
    default:
      return state;
  }
};
