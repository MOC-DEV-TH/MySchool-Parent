import { RestClientApi } from "../../network/RestApiClient";
import {  SET_TEACHER_DDL_DATA } from "../../utils/AppConstants";

export const getTeacherDDLList = (classId, sectionId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const baseUrl = getState().baseURL.baseUrl;
    await RestClientApi.getTeacherDDLList(
      token,
      classId,
      sectionId,
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

export const postMessageToServer = (id, text,navigation) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const baseUrl = getState().baseURL.baseUrl;
    await RestClientApi.postMessage(
      id,
      text,
      token,
      baseUrl
    ).then((response) => {
      console.log("PostMessage", response);
      alert(response.message)
    });
  };
};

