import {
  LOAD_ATTENDANCE_LOADING,
  LOAD_STUDENT_ATTENDANCE_DATA,
  SET_INITIAL_LOAD,
} from "../../utils/AppConstants";

const initialState = {
  attendanceData: {},
  totalDetail: {},
  allDateData: [],
  loading: false,
  currentMonth: 0,
  monthDataObj: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STUDENT_ATTENDANCE_DATA:
      return {
        attendanceData: action.attendanceResponse,
        allDateData: action.allDateData,
        currentMonth: action.currentMonth,
        totalDetail: action.totalDetail,
        monthDataObj: action.monthDataObj,
        loading: false,
      };
    case LOAD_ATTENDANCE_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case SET_INITIAL_LOAD: {
      return {
        initialState,
      };
    }

    default:
      return state;
  }
};
