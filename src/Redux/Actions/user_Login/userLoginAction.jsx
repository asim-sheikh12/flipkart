import { LOGIN_SUCCESS,LOGIN_FAILURE,LOGIN_PENDING } from "./userLogin";
import { openModal } from "../modal_Action/action";
import axios from "axios";
import { BASE_URL } from "../../../Components/config/envCongig";

export const loginUser = (formData) => async (dispatch) => {
  await dispatch({ type: LOGIN_PENDING, payload: true }) 
  await axios
    .post(`${BASE_URL}/userLogin`,formData)
    .then(async(res) => {
      localStorage.setItem("userToken",res.data.token)
      await dispatch({ type: LOGIN_SUCCESS, payload: res.data.userName });
      await dispatch({ type: LOGIN_PENDING, payload: false });
      await dispatch(openModal(false));
    })
    .catch( async(error) => {
      console.log("Error>>", error);
      await dispatch({ type: LOGIN_FAILURE, payload: error });
      await dispatch({ type: LOGIN_PENDING, payload: false });
})
}
