import { AUTHENTICATE, AUTHENTICATE_TOKEN } from "../../utils/AppConstants";

const initialState = {
  token: null,
  name: null,
  userID: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        token: action.token,
        name: action.name,
        userID: action.userID,
        loading: false,
      };
    case AUTHENTICATE_TOKEN:
      return {
        token: action.authToken,
        name: action.userName,
      };
    default:
      return state;
  }
};
