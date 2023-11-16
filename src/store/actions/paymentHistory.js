import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_PAYMENT_HISTORY_DATA } from "../../utils/AppConstants";

export const getAllPaymentHistory = (studentId) => {
  console.log("StudentId", studentId);
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const baseUrl = getState().baseURL.baseUrl;
    await RestClientApi.getPaymentHistory(token, studentId, baseUrl).then(
      (response) => {
        //console.log("PaymentHistoryResponse", response);
        dispatch({
          type: LOAD_PAYMENT_HISTORY_DATA,
          paidPaymentHistory: response.details.paid,
          unpaidPaymentHistory: response.details.unpaid,
        });
      }
    );
  };
};
