import { LOAD_PAYMENT_DETAIL } from "../../utils/AppConstants";

const initialState = {
  paymentDetailData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PAYMENT_DETAIL:
      return {
        paymentDetailData: action.paymentDetailResponse,
      };
    default:
      return state;
  }
};
