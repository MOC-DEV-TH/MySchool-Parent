import { LOAD_BILLING_HISTORY_DATA } from "../../utils/AppConstants";

const initialState = {
  paid: [],
  unpaid: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BILLING_HISTORY_DATA:
      return {
        paid: action.paidBillingHistory,
        unpaid: action.unpaidBillingHistory,
      };
    default:
      return state;
  }
};
