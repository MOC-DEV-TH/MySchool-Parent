import Routine from "../../data/model/Routine";
import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_CLASS_ROUTINE } from "../../utils/AppConstants";

export const getClassRoutine = (
  sessionId,
  classId,
  sectionId,
  dayIndex,
  token
) => {
  console.log(dayIndex);
  return async (dispatch) => {
    await RestClientApi.getClassRoutine(
      sessionId,
      classId,
      sectionId,
      token
    ).then((response) => {
      console.log(response);
      const routineData = [];
      const respData = [];
      if (dayIndex === 0) {
        respData.push(...response.details.Monday);
      } else if (dayIndex === 1) {
        respData.push(...response.details.Tuesday);
      } else if (dayIndex === 2) {
        respData.push(...response.details.Wednesday);
      } else if (dayIndex === 3) {
        respData.push(...response.details.Thursday);
      } else if (dayIndex === 4) {
        respData.push(...response.details.Friday);
      }

      console.log("Array length", respData.length);
      for (const item of respData) {
        routineData.push(
          new Routine(item.name, item.duration, item.subject, item.isActive)
        );
      }

      dispatch({
        type: LOAD_CLASS_ROUTINE,
        routineData: routineData,
      });
    });
  };
};
