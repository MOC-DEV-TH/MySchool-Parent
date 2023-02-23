import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_PROFILE_DETAIL_DATA } from "../../utils/AppConstants";

export const getProfileDetail = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    await RestClientApi.getProfileDetail(token).then(
      (response) => {
        console.log("Profile detail", response);
        dispatch({
          type: LOAD_PROFILE_DETAIL_DATA,
          profileDetail: response.details,
        });
      }
    );
  };
};
