import {
  LOAD_HOME_ERROR,
  LOAD_HOME_LOADING,
  LOAD_HOME_STUDENT,
  LOAD_HOME_SUCCESS,
} from "../../utils/AppConstants";

const initialState = {
  studentData: [],
  eventData: [],
  loading: false,
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOME_STUDENT: {
      return {
        ...state,
        studentData: action.studentData,
      };
    }
    case LOAD_HOME_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case LOAD_HOME_SUCCESS: {
      return {
        ...state,
        eventData: action.eventData,
        loading: false,
      };
    }
    case LOAD_HOME_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
