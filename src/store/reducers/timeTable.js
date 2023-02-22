import { LOAD_CLASS_ROUTINE } from "../../utils/AppConstants";

const initialState = {
  routineData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CLASS_ROUTINE:
      return {
        routineData: action.routineData,
      };
    default:
      return state;
  }
};
