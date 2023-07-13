import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_COMPLETED_EXAM_DETAIL, LOAD_EXAM_RESULT_DATA } from "../../utils/AppConstants";

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

export const getExamResultRules = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const baseUrl = getState().baseURL.baseUrl;
    await RestClientApi.getExamResultRules(
      token,
      baseUrl
    ).then((response) => {
      console.log("Exam Result rules", response);
      dispatch({
        type: LOAD_EXAM_RESULT_DATA,
        examResultResponse: response.data,
      });
    });
  };
};
