import axios from "axios";
import {BASE_URL} from "../../../../Components/config/envCongig";
import {
  APPROVE_PENDING,
} from "./adminActionTypes";

export const approveSeller = (id) => async (dispatch) => {
  const token = localStorage.getItem('adminToken')
  await dispatch({ type: APPROVE_PENDING, payload: true });
  await axios
    .put(
      `${BASE_URL}/api/VerifyByAdmin`,
      { id: id },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then(async (res) => {
      await dispatch({ type: APPROVE_PENDING, payload: false });
    })
    .catch(async (error) => {
      console.log("Error>>", error);
      await dispatch({ type: APPROVE_PENDING, payload: false });
    });
};
