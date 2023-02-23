import { LOAD_PROFILE_DETAIL_DATA } from "../../utils/AppConstants";

const initialState = {
  profileDetail: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE_DETAIL_DATA:
      return {
        profileDetail: action.profileDetail,
      };
    default:
      return state;
  }
};
