
import { ADD_TO_CART,DELETE_FROM_CART } from "../../Actions/cartActions/cartActionType";
const initialState = []

const cartReducer = (state = initialState,action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productData  = action.payload;
      {
        return [
              ...state,
          {...productData}
        ];
      }
    case DELETE_FROM_CART:
      const id = action.payload
      console.log("Delete ID",id)
      console.log("Total List >>>>>>",state.productList);
      const newList = state.productList.filter(
        (elem) => 
        elem.data.id !== id 
      );
      console.log("New List >>>>>>",newList)  
      return {
        productList: newList,
      };
      break;
    default:
      return state;
  }
};
export default cartReducer;
