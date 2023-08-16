import { RestClientApi } from "../../network/RestApiClient";
import  { SET_ACTIVITY_DATA } from "../../utils/AppConstants";

export const getAllActivities = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const baseUrl = getState().baseURL.baseUrl;
    await RestClientApi.getActivities(token, baseUrl).then((response) => {
      console.log("ActivityResponse", response);
      dispatch({
        type: SET_ACTIVITY_DATA,
        activityResponse: response,
      });
    });
  };
};
