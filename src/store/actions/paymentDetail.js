import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_PAYMENT_DETAIL } from "../../utils/AppConstants";

export const getPaymentDetail = (transactionId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    await RestClientApi.getPaymentDetail(token, transactionId).then(
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
