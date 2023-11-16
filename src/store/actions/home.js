import Student from "../../data/model/Student";
import { RestClientApi } from "../../network/RestApiClient";
import * as notificationActions from "../../store/actions/notification";
import AppConstants, {
  LOAD_HOME_LOADING,
  LOAD_HOME_STUDENT,
  LOAD_HOME_SUCCESS,
} from "../../utils/AppConstants";
import { getData, setData } from "../../utils/SessionManager";

export const getAllStudentData = (token) => {
  //console.log("TokenData",token)
  return async (dispatch, getState) => {
    const baseUrl = getState().baseURL.baseUrl;
    dispatch({ type: LOAD_HOME_LOADING });
    RestClientApi.getAllStudents(token, baseUrl)
      .then((response) => {
        const student = [];
        for (const item of response.data) {
          student.push(
            new Student(
              item.id,
              item.session_id,
              item.class_id,
              item.section_id,
              item.name,
              item.image,
              item.email,
              item.class,
              item.section,
              item.roll_no,
              item.admission_date,
              item.gender,
              item.blood_group
            )
          );
        }
        dispatch({
          type: LOAD_HOME_STUDENT,
          studentData: student,
        });

        //console.log("Notification Total", response.noti_total);
        setData(
          AppConstants.KEY_NOTIFICATION_COUNT,
          response.noti_total.toString()
        );
      })
      .finally(() => {
        RestClientApi.getUpComingEvent(token, baseUrl).then((response) => {
          //console.log("UpComingEvent", response);
          dispatch({
            type: LOAD_HOME_SUCCESS,
            eventData: response,
          });
        });
      });
  };
};
