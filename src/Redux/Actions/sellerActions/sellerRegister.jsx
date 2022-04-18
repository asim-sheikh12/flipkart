import axios from "axios";
import { BASE_URL } from "../../../Components/config/envCongig";
import { SELLER_REGISTER, SELLER_REGISTER_PENDING } from "./sellerRegisterType";
export const sellerRegister = (formData) => async (dispatch) => {
  const { fullName, email, number, password } = formData;
  await dispatch({ type: SELLER_REGISTER_PENDING, payload: true });
  await axios
    .post(`${BASE_URL}/api/adminSignup`, {
      fullName,
      email,
      number,
      password,
    })
    .then(async (res) => {
      localStorage.setItem("adminToken", res.data.jwtToken);
      await dispatch({ type: SELLER_REGISTER, payload: res });
      await dispatch({ type: SELLER_REGISTER_PENDING, payload: false });
    });
};
