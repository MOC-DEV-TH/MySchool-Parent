import Routine from "../../data/model/Routine";
import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_CLASS_ROUTINE } from "../../utils/AppConstants";

export const getClassRoutine = (sessionId, classId, sectionId, dayIndex) => {
  console.log(sessionId, classId, sectionId, dayIndex);
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const baseUrl = getState().baseURL.baseUrl;
    const mondayData = [];
    const tuesdayData = [];
    const wedData = [];
    const thuData = [];
    const friDay = [];
    await RestClientApi.getClassRoutine(
      sessionId,
      classId,
      sectionId,
      token,
      baseUrl
    ).then((response) => {
      console.log("Token", token);
      console.log("Response", response.details.Monday);

      if (dayIndex === 0) {
        for (const item of response.details.Monday) {
          mondayData.push(
            new Routine(item.name, item.duration, item.subject, item.isActive)
          );
        }

        dispatch({
          type: LOAD_CLASS_ROUTINE,
          routineData: mondayData,
        });
      }
      if (dayIndex === 1) {
        for (const item of response.details.Tuesday) {
          tuesdayData.push(
            new Routine(item.name, item.duration, item.subject, item.isActive)
          );
        }

        dispatch({
          type: LOAD_CLASS_ROUTINE,
          routineData: tuesdayData,
        });
      }
      if (dayIndex === 2) {
        for (const item of response.details.Wednesday) {
          wedData.push(
            new Routine(item.name, item.duration, item.subject, item.isActive)
          );
        }

        dispatch({
          type: LOAD_CLASS_ROUTINE,
          routineData: wedData,
        });
      }
      if (dayIndex === 3) {
        for (const item of response.details.Thursday) {
          thuData.push(
            new Routine(item.name, item.duration, item.subject, item.isActive)
          );
        }

        dispatch({
          type: LOAD_CLASS_ROUTINE,
          routineData: thuData,
        });
      }
      if (dayIndex === 4) {
        for (const item of response.details.Friday) {
          friDay.push(
            new Routine(item.name, item.duration, item.subject, item.isActive)
          );
        }

        dispatch({
          type: LOAD_CLASS_ROUTINE,
          routineData: friDay,
        });
      }
    });
  };
};
