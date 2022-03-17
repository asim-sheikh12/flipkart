import { Product_Details } from "../../../Pages/Product Details/Product_Details";
import axios from "axios";

export const getProductDetails = () => async (dispatch) => {
  const response = await axios.get(
    "http://localhost:5000/api/v1/products/product"
  );
  dispatch({ type: Product_Details, payload: response.data.data });
};
