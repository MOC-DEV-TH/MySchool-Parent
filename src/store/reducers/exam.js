import {
  LOAD_COMPLETED_EXAM,
  LOAD_UPCOMING_EXAM,
} from "../../utils/AppConstants";

const initialState = {
  completedExamData: [],
  upcomingExamData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMPLETED_EXAM:
      return {
        completedExamData: action.completedExamData,
      };
    case LOAD_UPCOMING_EXAM:
      return {
        upcomingExamData: action.upcomingExamData,
      };
    default:
      return state;
  }
};
