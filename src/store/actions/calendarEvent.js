import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_UPCOMING_EVENT_CALENDAR } from "../../utils/AppConstants";

export const getCalendarEvent = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const baseUrl = getState().baseURL.baseUrl;

    await RestClientApi.getCalendarEvent(token, baseUrl).then((response) => {
      console.log("CalendarEvent", response);
      const dateArray = [];
      for (const data of response) {
        const diffTime = Math.abs(
          new Date(data.start_date) - new Date(data.end_date)
        );
        const diffDays = 0 | (diffTime / 864e5);
        for (let i = 0; i <= diffDays; i++) {
          const newDate = new Date(
            new Date(data.start_date).getTime() + i * 864e5
          );

          var year = newDate.getFullYear();
          var month = String(newDate.getMonth() + 1).padStart(2, "0");
          var date = String(newDate.getDate()).padStart(2, "0");

          dateArray.push({
            date: year + "-" + month + "-" + date,
            bgColor: data.color,
          });
        }
      }

      console.log("DATEHERE", dateArray);

      dispatch({
        type: LOAD_UPCOMING_EVENT_CALENDAR,
        mapData: dateArray,
        data: response,
      });
    });
  };
};
