import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_COMPLETED_EXAM_DETAIL } from "../../utils/AppConstants";

export const getCompletedExamDetail = (studentId, examId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const baseUrl = getState().baseURL.baseUrl;
    await RestClientApi.getCompletedExamDetail(
      token,
      studentId,
      examId,
      baseUrl
    ).then((response) => {
      console.log("Completed Exam detail", response);
      dispatch({
        type: LOAD_COMPLETED_EXAM_DETAIL,
        completedExamDetailData: response.details,
      });
    });
  };
};
