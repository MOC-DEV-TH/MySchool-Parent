import CompletedExam from "../../data/model/CompleteExam";
import UpcomingExam from "../../data/model/UpcomingExam";
import UpcomingExamDetail from "../../data/model/UpcomingExamDetail";
import { RestClientApi } from "../../network/RestApiClient";
import AppConstants, {
  LOAD_COMPLETED_EXAM,
  LOAD_UPCOMING_EXAM,
  LOAD_UPCOMING_EXAM_DETAIL,
} from "../../utils/AppConstants";

export const getAllCompletedExam = (token) => {
  return async (dispatch, getState) => {
    await RestClientApi.getCompletedExam(token).then((response) => {
      console.log(response);
      const completedExam = [];
      for (const item of response) {
        completedExam.push(new CompletedExam(item.mark, item.name));
      }
      dispatch({
        type: LOAD_COMPLETED_EXAM,
        completedExamData: completedExam,
      });
    });
  };
};

export const getAllUpcomingExam = (token) => {
  return async (dispatch) => {
    await RestClientApi.getUpComingExam(token).then((response) => {
      console.log(response);
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

export const getUpcomingExamDetail = (token, sessionId, examId) => {
  return async (dispatch) => {
    await RestClientApi.getUpcomingExamDetail(sessionId, examId, token).then(
      (response) => {
        console.log(response);
        const upComingExamDeatil = [];
        for (const item of response.details) {
          upComingExamDeatil.push(
            new UpcomingExamDetail(item.name, item.duration, item.exam_date)
          );
        }
        dispatch({
          type: LOAD_UPCOMING_EXAM_DETAIL,
          upcomingExamDetailData: upComingExamDeatil,
        });
      }
    );
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
