import { Product_Details } from "../../../Pages/Product Details/Product_Details";

const initialState = {
  productData: [],
};

const getProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case Product_Details:
      return {
        ...state,
        productData: action.payload,
      };
    default:
      return state;
  }
};
export default getProductReducer;
