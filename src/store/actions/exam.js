import CompletedExam from "../../data/model/CompleteExam";
import UpcomingExam from "../../data/model/UpcomingExam";
import { RestClientApi } from "../../network/RestApiClient";
import {
  LOAD_COMPLETED_EXAM,
  LOAD_UPCOMING_EXAM,
} from "../../utils/AppConstants";


export const getAllCompletedExam = (token) => {
  return async (dispatch) => {
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
  await  RestClientApi.getUpComingExam(token).then((response) => {
      console.log(response.data);
      const upComingExam = [];
      for (const item of response.data) {
        upComingExam.push(
          new UpcomingExam(
            item.id,
            item.name,
            item.start_date,
            item.end_date,
            item.days_left
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
