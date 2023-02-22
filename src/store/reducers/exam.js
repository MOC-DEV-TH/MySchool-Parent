import {
  LOAD_COMPLETED_EXAM,
  LOAD_UPCOMING_EXAM,
  LOAD_UPCOMING_EXAM_DETAIL,
} from "../../utils/AppConstants";

const initialState = {
  completedExamData: [],
  upcomingExamData: [],
  upcomingExamDetailData: [],
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
    case LOAD_UPCOMING_EXAM_DETAIL:
      return {
        upcomingExamDetailData: action.upcomingExamDetailData,
      };
    default:
      return state;
  }
};
