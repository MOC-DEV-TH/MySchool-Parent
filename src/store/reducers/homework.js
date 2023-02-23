import { LOAD_HOMEWORK_DATA } from "../../utils/AppConstants";

const initialState = {
  homeworkData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOMEWORK_DATA:
      return {
        homeworkData: action.homeworkResponse,
      };
    default:
      return state;
  }
};
