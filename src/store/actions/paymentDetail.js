import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_PAYMENT_DETAIL } from "../../utils/AppConstants";

export const getPaymentDetail = (transactionId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const baseUrl = getState().baseURL.baseUrl;
    await RestClientApi.getPaymentDetail(token, transactionId,baseUrl).then(
      (response) => {
        console.log("PaymentDetailResponse", response);
        dispatch({
          type: LOAD_PAYMENT_DETAIL,
          paymentDetailResponse: response,
        });
      }
    );
  };
};
