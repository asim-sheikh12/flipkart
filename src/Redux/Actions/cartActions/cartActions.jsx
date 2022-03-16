import { ADD_TO_CART,DELETE_FROM_CART } from "./cartActionType";
export const AddToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data
  };

};
  export const DeleteItem = (id) => {
    
  return {

    type: DELETE_FROM_CART,
    payload: id
  };
};