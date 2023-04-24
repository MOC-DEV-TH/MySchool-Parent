import CompletedExam from "../../data/model/CompleteExam";
import UpcomingExam from "../../data/model/UpcomingExam";
import { RestClientApi } from "../../network/RestApiClient";
import {
  LOAD_COMPLETED_EXAM,
  LOAD_UPCOMING_EXAM,
} from "../../utils/AppConstants";

export const getAllCompletedExam = (studentId, sectionId, classId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const baseUrl = getState().baseURL.baseUrl;
    await RestClientApi.getCompletedExam(
      token,
      studentId,
      sectionId,
      classId,
      baseUrl
    ).then((response) => {
      console.log("CompletedExam", response);
      dispatch({
        type: LOAD_COMPLETED_EXAM,
        completedExamData: response.detail,
      });
    });
  };
};

export const getAllUpcomingExam = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const baseUrl = getState().baseURL.baseUrl;
    await RestClientApi.getUpComingExam(token, baseUrl).then((response) => {
      console.log("UpcomingExam", response);
      const upComingExam = [];
      for (const item of response) {
        upComingExam.push(
          new UpcomingExam(
            item.id,
            item.session_id,
            item.name,
            item.note,
            item.start_date,
            item.end_date,
            item.created_at,
            item.updated_at
          )
        );
      }
      dispatch({
        type: LOAD_UPCOMING_EXAM,
        upcomingExamData: upComingExam,
      });
    });
  };
};

export const getExamStatus = (mark) => {
  let status = "";
  if (mark < 50) {
    status = "FAIL";
  } else {
    status = "PASS";
  }
  return status;
};
