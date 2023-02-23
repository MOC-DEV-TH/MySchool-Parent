import Student from "../../data/model/Student";
import { RestClientApi } from "../../network/RestApiClient";
import  {
  LOAD_HOME_LOADING,
  LOAD_HOME_STUDENT,
  LOAD_HOME_SUCCESS,
} from "../../utils/AppConstants";

export const getAllStudentData = (token) => {
  return async (dispatch) => {
    dispatch({ type: LOAD_HOME_LOADING });
    RestClientApi.getAllStudents(token)
      .then((response) => {
        console.log("Student", response.data);
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
      })
      .finally(() => {
        RestClientApi.getUpComingEvent(token).then((response) => {
          console.log("UpComingEvent", response.data);
          dispatch({
            type: LOAD_HOME_SUCCESS,
            eventData: response.data,
          });
        });
      });
  };
};
