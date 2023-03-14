import { ROUTES } from "../../constants";
import { RestClientApi } from "../../network/RestApiClient";
import AppConstants, {
  AUTHENTICATE,
  AUTHENTICATE_TOKEN,
  LOGIN_LOADING,
} from "../../utils/AppConstants";
import { getData, setData } from "../../utils/SessionManager";

export const login = (email, password, navigation) => {
  return async (dispatch) => {
    await RestClientApi.login(email, password).then((response) => {
      console.log(response);
      if (response.status == AppConstants.LOGIN_STATUS_CODE) {
        dispatch({
          type: AUTHENTICATE,
          token: response.token,
          name: response.name,
          userID: response.id,
        });

        setData(AppConstants.KEY_AUTH_TOKEN, response.token);
        setData(
          AppConstants.KEY_USER_DATA,
          JSON.stringify({
            token: response.token,
            userId: response.id,
            name: response.name,
          })
        );
        getData(AppConstants.KEY_EXPO_TOKEN).then((expoToken) => {
          console.log("Post Expo Token", response.token);
          RestClientApi.postExpoToken(
            response.id,
            expoToken,
            response.token
          ).then(() => {
            console.log("Success Post Token");
          });
        });
        navigation.replace(ROUTES.HOME);
      } else {
        alert(response.message);
      }
    });
  };
};

export const setAuthToken = (token, userName, userId) => {
  return (dispatch) => {
    dispatch({
      type: AUTHENTICATE,
      token: token,
      name: userName,
      userID: userId,
    });
  };
};
