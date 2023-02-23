import { LOAD_UPCOMING_EXAM_DETAIL } from "../../utils/AppConstants";

const initialState = {
  upcomingExamDetailData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_UPCOMING_EXAM_DETAIL:
      return {
        upcomingExamDetailData: action.upcomingExamDetailData,
      };
    default:
      return state;
  }
};
