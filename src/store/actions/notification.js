import { RestClientApi } from "../../network/RestApiClient";
import {
  LOAD_NOTIFICATION_DATA,
  NOTIFICATION_RECEIVED,
} from "../../utils/AppConstants";

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
      dispatch({
        type: LOAD_NOTIFICATION_DATA,
        notificationResponse: response,
      });
    });
  };
};
