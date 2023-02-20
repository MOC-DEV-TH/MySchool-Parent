import { ROUTES } from "../../constants";
import { RestClientApi } from "../../network/RestApiClient";
import AppConstants, { AUTHENTICATE } from "../../utils/AppConstants";
import { setData } from "../../utils/SessionManager";

export const login = (email, password, navigation) => {
  return async (dispatch) => {
    RestClientApi.login(email, password).then((response) => {
      console.log(response);
      if (response.status == AppConstants.LOGIN_STATUS_CODE) {
        dispatch({
          type: AUTHENTICATE,
          token: response.token,
        });
        setData(AppConstants.KEY_AUTH_TOKEN, response.token);
        navigation.replace(ROUTES.HOME);
      } else {
        alert(response.message);
      }
    });
  };
};
