import { NOTIFICATION_RECEIVED } from "../../utils/AppConstants";

export const receiveNotification = (notificationCount) => {
  return (dispatch) => {
    dispatch({
      type: NOTIFICATION_RECEIVED,
      notiCount: notificationCount,
    });
  };
};
