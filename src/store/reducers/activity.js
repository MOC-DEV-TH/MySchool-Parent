import {  SET_ACTIVITY_DATA } from "../../utils/AppConstants";

const initialState = {
  activityData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVITY_DATA:
      return {
        activityData: action.activityResponse,
      };
    default:
      return state;
  }
};
