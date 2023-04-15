import { SET_BASE_URL } from "../../utils/AppConstants";

const initialState = {
  baseUrl: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BASE_URL:
      return {
        baseUrl: action.baseUrl,
      };
    default:
      return state;
  }
};
