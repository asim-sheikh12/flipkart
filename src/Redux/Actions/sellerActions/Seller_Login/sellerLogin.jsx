import { SELLER_LOGIN_SUCCESS,SELLER_LOGIN_FAILURE,SELLER_LOGIN_PENDING } from "./sellerLoginType";
import axios from "axios";
import { BASE_URL } from "../../../../Components/config/envCongig";

export const sellerLogin = (formData) => async (dispatch) => {
  await dispatch({ type: SELLER_LOGIN_PENDING, payload: true }) 
  await axios
    .post(`${BASE_URL}/api/adminLogin`,formData)
    .then(async(res) => {
      localStorage.setItem('adminToken',res.data.token)
      await dispatch({ type: SELLER_LOGIN_SUCCESS, payload: res.data });
      await dispatch({ type: SELLER_LOGIN_PENDING, payload: false });
    })
    .catch( async(error) => {
      console.log("Error>>", error);
      await dispatch({ type: SELLER_LOGIN_FAILURE, payload: error });
      await dispatch({ type: SELLER_LOGIN_PENDING, payload: false });
})
}
