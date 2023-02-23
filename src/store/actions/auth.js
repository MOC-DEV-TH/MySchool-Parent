import { ROUTES } from "../../constants";
import { RestClientApi } from "../../network/RestApiClient";
import AppConstants, { AUTHENTICATE,AUTHENTICATE_TOKEN } from "../../utils/AppConstants";
import { setData } from "../../utils/SessionManager";

export const login = (email, password, navigation) => {
  return async (dispatch) => {
    RestClientApi.login(email, password).then((response) => {
      console.log(response);
      if (response.status == AppConstants.LOGIN_STATUS_CODE) {
        dispatch({
          type: AUTHENTICATE,
          token: response.token,
          name : response.name
        });
        setData(AppConstants.KEY_AUTH_TOKEN, response.token);
        navigation.replace(ROUTES.HOME);
      } else {
        alert(response.message);
      }
    });
  };
};

export const setAuthToken = (token,userName) => {
  return (dispatch) => {
    dispatch({
      type: AUTHENTICATE_TOKEN,
      authToken: token,
      name : userName
    });
  };
};
