import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_COMPLETED_EXAM_DETAIL } from "../../utils/AppConstants";

export const getCompletedExamDetail = (studentId, examId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    await RestClientApi.getCompletedExamDetail(token, studentId, examId).then(
      (response) => {
        console.log("Completed Exam detail", response);
        dispatch({
          type: LOAD_COMPLETED_EXAM_DETAIL,
          completedExamDetailData: response.details,
        });
      }
    );
  };
};
