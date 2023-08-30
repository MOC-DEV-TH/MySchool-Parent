import { ROUTES } from "../../constants";
import { RestClientApi } from "../../network/RestApiClient";
import { SET_TEACHER_DDL_DATA } from "../../utils/AppConstants";

export const getTeacherDDLList = (classId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const baseUrl = getState().baseURL.baseUrl;
    await RestClientApi.getTeacherDDLList(
      token,
      classId,
      baseUrl
    ).then((response) => {
      console.log("DDLResponse", response);
      dispatch({
        type: SET_TEACHER_DDL_DATA,
        teacherDDLResponse: response,
      });
    });
  };
};

export const postMessageToServer = (id, text, expoPushToken, navigation) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const baseUrl = getState().baseURL.baseUrl;
    await RestClientApi.postMessage(
      id,
      text,
      token,
      baseUrl,
      expoPushToken
    ).then((response) => {
      console.log("PostMessage", response);
      if (response.status == 200) {
        alert(response.message);
        //navigation.navigate(ROUTES.MESSAGE_HISTORY);
      } else {
        alert(response.message);
      }
    });
  };
};
