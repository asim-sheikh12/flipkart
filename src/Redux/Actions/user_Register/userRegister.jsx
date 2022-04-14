import {
  REGISTER_FAILURE,
  REGISTER_PENDING,
  REGISTER_SUCCESS,
} from "./userRegisterTypes";
import { signupModal } from "../modal_Action/action";
import axios from "axios";
import { BASE_URL } from "../../../Components/config/envCongig";

export const registerUser = (formData) => async (dispatch) => {
  await dispatch({ type: REGISTER_PENDING, payload: true });
  await axios
    .post(`${BASE_URL}/userSignup`, formData)
    .then(async (res) => {
      localStorage.setItem("userToken", res.data.jwtToken);
      await dispatch({ type: REGISTER_SUCCESS, payload: res.data.data });
      await dispatch({ type: REGISTER_PENDING, payload: false });
      await dispatch(signupModal(false));
    })
    .catch(async (error) => {
      console.log("Error>>", error);
      await dispatch({ type: REGISTER_FAILURE, payload: error });
      await dispatch({ type: REGISTER_PENDING, payload: false });
    });
};
