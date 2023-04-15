import { ROUTES } from "../../constants";
import { SET_BASE_URL } from "../../utils/AppConstants";

export const setBaseUrl = (baseUrl, navigation) => {
  return (dispatch) => {
    dispatch({
      type: SET_BASE_URL,
      baseUrl: baseUrl,
    });
    navigation.replace(ROUTES.LOGIN);
  };
};
