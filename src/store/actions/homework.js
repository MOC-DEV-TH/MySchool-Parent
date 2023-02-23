import { RestClientApi } from "../../network/RestApiClient";
import {
  LOAD_HOMEWORK_DATA,
} from "../../utils/AppConstants";

export const getAllHomeWork = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    await RestClientApi.getHomework(token).then((response) => {
      console.log("HomeworkResponse", response);
      dispatch({
        type: LOAD_HOMEWORK_DATA,
        homeworkResponse: response.details,
      });
    });
  };
};
