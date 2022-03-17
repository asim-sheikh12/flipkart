import { ADD_TO_CART, DECREMENT, DELETE_FROM_CART, INCREMENT } from "./cartActionType";
export const AddToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
export const DeleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  };
};
export const Increment= (id) => {
  return {
    type: INCREMENT,
    payload: id,
  };
};
export const Decrement = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};
