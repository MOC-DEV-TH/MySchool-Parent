import { LOAD_COMPLETED_EXAM_DETAIL } from "../../utils/AppConstants";

const initialState = {
  completedExamDetailData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMPLETED_EXAM_DETAIL:
      return {
        completedExamDetailData: action.completedExamDetailData,
      };
    default:
      return state;
  }
};
