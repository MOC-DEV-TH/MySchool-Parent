import { ROUTES } from "../../constants";
import { RestClientApi } from "../../network/RestApiClient";
import AppConstants, { SET_BASE_URL } from "../../utils/AppConstants";
import { setData } from "../../utils/SessionManager";

export const getSchoolCodeUrl = (schoolCode, navigation) => {
  return async (dispatch, getState) => {
    await RestClientApi.getSchoolCode(schoolCode).then((response) => {
      console.log("SchoolCodeResponse", response);
      if (response.status == "000") {
        dispatch({
          type: SET_BASE_URL,
          baseUrl: response.url,
        });

        setData(AppConstants.KEY_BASE_URL, response.url);
        navigation.replace(ROUTES.LOGIN);
      } else {
        alert(response.description);
      }
    });
  };
};
