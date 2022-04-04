import { SELLER_LOGIN } from "../../Actions/sellerActions/sellerLoginType";

const initialState = {
    sellerData : []
}

const sellerReducer = (state= initialState,action) => {
    switch(action.type)
    {
        case SELLER_LOGIN : 
        return {
            ...state, sellerData : action.payload
        }
         default:
      return state;
    }
}
export default sellerReducer;
