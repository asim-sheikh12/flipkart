import { Product_Details } from "../../../Pages/Product Details/Product_Details";
import axios from "axios";

export const getProductDetails = () => async (dispatch) =>
{
  const response = await axios.get("https://fakestoreapi.com/products");
  dispatch({ type: Product_Details, payload: response.data });
}
