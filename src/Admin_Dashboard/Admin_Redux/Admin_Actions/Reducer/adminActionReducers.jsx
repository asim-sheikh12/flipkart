import { APPROVE_PENDING } from "../Action/adminActionTypes";
const initialState = {
  pending : false
};

const adminActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPROVE_PENDING:
      return {
          ...state,
        pending: action.payload,
      };

    default:
      return state;
  }
};
export default adminActionReducer;
