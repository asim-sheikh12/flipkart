import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  INCREMENT,
} from "../../Actions/cartActions/cartActionType";
const initialState = [];
const itemData =[]
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productData = action.payload;

      {
        return [...state, { ...productData }];
      }
    case DELETE_FROM_CART:
      const id = action.payload;
      const newList = state.filter((elem) => elem.id !== id);
      return [...newList];
      break;
    case INCREMENT:
      console.log(action.payload)
      
      const itemData = state.filter((elem)=>
      { 
       return elem.id===action.payload
      })
  
      return[...state]
      
    default:
      return state;
  }

};
export default cartReducer;
