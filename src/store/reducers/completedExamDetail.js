import {
  LOAD_COMPLETED_EXAM_DETAIL,
  LOAD_EXAM_RESULT_DATA,
} from "../../utils/AppConstants";

const initialState = {
  completedExamDetailData: [],
  examResultData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMPLETED_EXAM_DETAIL:
      return {
        ...state,
        completedExamDetailData: action.completedExamDetailData,
      };
    case LOAD_EXAM_RESULT_DATA:
      return {
        ...state,
        examResultData: action.examResultResponse,
      };
    default:
      return state;
  }
};
