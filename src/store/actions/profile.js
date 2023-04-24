import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_PROFILE_DETAIL_DATA } from "../../utils/AppConstants";

export const getProfileDetail = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const userID = getState().auth.userID;
    const baseUrl = getState().baseURL.baseUrl;
    await RestClientApi.getProfileDetail(token, userID, baseUrl).then(
      (response) => {
        console.log("Profile detail", response.guardian.address);
        dispatch({
          type: LOAD_PROFILE_DETAIL_DATA,
          profileDetail: response,
          address: response.guardian.address,
          phone: response.guardian.phone,
        });
      }
    );
  };
};
