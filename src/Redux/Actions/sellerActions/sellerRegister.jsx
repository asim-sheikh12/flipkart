import axios from "axios";
import { BASE_URL } from "../../../Components/config/envCongig";
import { SELLER_REGISTER } from "./sellerRegisterType";
export const sellerRegister = (formData) => async (dispatch) => {
  const { fullName, email, phone, password } = formData;

  await axios
    .post(`${BASE_URL}/api/adminSignup`, {
      fullName,
      email,
      phone,
      password,
    })
    .then(async(res) => {
      console.log(res);
      localStorage.setItem('adminToken',)
      console.log("Admin Register");
       await dispatch({ type: SELLER_REGISTER, payload: res });
    });
     
};
