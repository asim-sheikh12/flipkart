import { SELLER_REGISTER, SELLER_REGISTER_PENDING } from "../../Actions/sellerActions/sellerRegisterType";

const initialState = {
    sellerData : [],
    loading: false
}

const sellerReducer = (state= initialState,action) => {
    switch(action.type)
    {
        case SELLER_REGISTER : 
        return {
            ...state, sellerData : action.payload
        }
        case SELLER_REGISTER_PENDING:
            return {
                ...state,loading: action.payload
            }
         default:
      return state;
    }
}
export default sellerReducer;
