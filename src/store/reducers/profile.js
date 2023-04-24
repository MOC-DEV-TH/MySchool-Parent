import { LOAD_PROFILE_DETAIL_DATA } from "../../utils/AppConstants";

const initialState = {
  profileDetail: {},
  address: null,
  phone: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE_DETAIL_DATA:
      return {
        profileDetail: action.profileDetail,
        address: action.address,
        phone: action.phone,
      };
    default:
      return state;
  }
};
