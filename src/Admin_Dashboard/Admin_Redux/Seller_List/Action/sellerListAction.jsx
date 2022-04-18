import { SELLER_LIST, FETCH_PENDING, FETCH_FAIL } from "./sellerListType";
import axios from "axios";
import { BASE_URL } from "../../../../Components/config/envCongig";

export const getsellerList = () => async (dispatch) => {
  await dispatch({ type: FETCH_PENDING, payload: true });
  const token = localStorage.getItem('adminToken')
  await axios
    .get(`${BASE_URL}/api/getAllSellers`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(async (res) => {
      await dispatch({ type: SELLER_LIST, payload: res.data.data });
      await dispatch({ type: FETCH_PENDING, payload: false });
    })
    .catch(async (error) => {
      console.log("Error>>", error);
      await dispatch({ type: FETCH_FAIL, payload: error });
      await dispatch({ type: FETCH_PENDING, payload: false });
    });
};
