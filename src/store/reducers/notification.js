import {
  LOAD_NOTIFICATION_DATA,
  NOTIFICATION_RECEIVED,
} from "../../utils/AppConstants";

const initialState = {
  notificationCount: 0,
  notificationData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION_RECEIVED:
      return {
        notificationCount: action.notiCount,
      };
    case LOAD_NOTIFICATION_DATA:
      return {
        notificationData: action.notificationResponse,
      };
    default:
      return state;
  }
};
