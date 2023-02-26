import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_HOMEWORK_DATA } from "../../utils/AppConstants";

export const getAllHomeWork = (classId, sectionId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    await RestClientApi.getHomework(token, classId, sectionId).then(
      (response) => {
        console.log("HomeworkResponse", response);
        dispatch({
          type: LOAD_HOMEWORK_DATA,
          homeworkResponse: response.details,
        });
      }
    );
  };
};
