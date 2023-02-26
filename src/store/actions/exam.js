import CompletedExam from "../../data/model/CompleteExam";
import UpcomingExam from "../../data/model/UpcomingExam";
import { RestClientApi } from "../../network/RestApiClient";
import {
  LOAD_COMPLETED_EXAM,
  LOAD_UPCOMING_EXAM,
} from "../../utils/AppConstants";

export const getAllCompletedExam = (studentId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    await RestClientApi.getCompletedExam(token, studentId).then((response) => {
      console.log(response);
      // const completedExam = [];
      // for (const item of response) {
      //   completedExam.push(new CompletedExam(item.mark, item.name));
      // }
      dispatch({
        type: LOAD_COMPLETED_EXAM,
        completedExamData: response.details,
      });
    });
  };
};

export const getAllUpcomingExam = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
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

export const getExamStatus = (mark) => {
  let status = "";
  if (mark < 50) {
    status = "FAIL";
  } else {
    status = "PASS";
  }
  return status;
};
