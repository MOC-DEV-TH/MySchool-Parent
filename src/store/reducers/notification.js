import { NOTIFICATION_RECEIVED } from "../../utils/AppConstants";

const initialState = {
  notificationCount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION_RECEIVED:
      return {
        notificationCount: action.notiCount,
      };
    default:
      return state;
  }
};
