import { SET_TEACHER_DDL_DATA } from "../../utils/AppConstants";

const initialState = {
  teacherDDLList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TEACHER_DDL_DATA:
      return {
        teacherDDLList: action.teacherDDLResponse,
      };
    default:
      return state;
  }
};
