import UpcomingExamDetail from "../../data/model/UpcomingExamDetail";
import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_UPCOMING_EXAM_DETAIL } from "../../utils/AppConstants";

export const getUpcomingExamDetail = (
  sessionId,
  examId,
  class_id,
  section_id
) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const baseUrl = getState().baseURL.baseUrl;
    await RestClientApi.getUpcomingExamDetail(
      sessionId,
      examId,
      class_id,
      section_id,
      token,
      baseUrl
    ).then((response) => {
      console.log("Upcoming Exam detail", response);
      const upComingExamDetail = [];
      for (const item of response.details) {
        upComingExamDetail.push(
          new UpcomingExamDetail(item.name, item.duration, item.exam_date)
        );
      }
      dispatch({
        type: LOAD_UPCOMING_EXAM_DETAIL,
        upcomingExamDetailData: upComingExamDetail,
      });
    });
  };
};
