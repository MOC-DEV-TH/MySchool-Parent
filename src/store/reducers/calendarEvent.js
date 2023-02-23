import { LOAD_UPCOMING_EVENT_CALENDAR } from "../../utils/AppConstants";

const initialState = {
  calendarEvent: [],
  mapData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_UPCOMING_EVENT_CALENDAR:
      return {
        calendarEvent: action.data,
        mapData: action.mapData,
      };
    default:
      return state;
  }
};
