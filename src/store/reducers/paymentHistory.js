import { LOAD_PAYMENT_HISTORY_DATA } from "../../utils/AppConstants";

const initialState = {
  paid: [],
  unpaid: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PAYMENT_HISTORY_DATA:
      return {
        paid: action.paidPaymentHistory,
        unpaid: action.unpaidPaymentHistory,
      };
    default:
      return state;
  }
};
