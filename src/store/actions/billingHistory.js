import { RestClientApi } from "../../network/RestApiClient";
import { LOAD_BILLING_HISTORY_DATA } from "../../utils/AppConstants";

export const getAllBillingHistory = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const parentId = getState().auth.userID;
    console.log("ParentId",parentId)
    await RestClientApi.getBillingHistory(token,parentId).then((response) => {
      console.log("BillingHistoryResponse", response);
      dispatch({
        type: LOAD_BILLING_HISTORY_DATA,
        paidBillingHistory: response.details.paid,
        unpaidBillingHistory: response.details.unpaid,
      });
    });
  };
};
