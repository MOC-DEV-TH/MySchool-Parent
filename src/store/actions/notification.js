import { RestClientApi } from "../../network/RestApiClient";
import AppConstants, {
  LOAD_NOTIFICATION_DATA,
  NOTIFICATION_RECEIVED,
} from "../../utils/AppConstants";
import { setData } from "../../utils/SessionManager";

export const receiveNotification = (notificationCount) => {
  return (dispatch) => {
    dispatch({
      type: NOTIFICATION_RECEIVED,
      notiCount: notificationCount,
    });
  };
};

export const getAllNotification = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    await RestClientApi.getAllNotification(token).then((response) => {
      console.log("NotificationResponse", response);
      setData(AppConstants.LAST_NOTI_COUNT, response.length.toString());
      dispatch({
        type: LOAD_NOTIFICATION_DATA,
        notificationResponse: response,
      });
    });
  };
};
