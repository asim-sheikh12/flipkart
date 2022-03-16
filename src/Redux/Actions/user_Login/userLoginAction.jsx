import { USER_LOGIN } from "./userLogin";
import axios from "axios";

export const loginUser = (formData) => async (dispatch) => {
    const {email,password} = formData
//   const result = await axios.post(
//     "https://soft-stingray-76.loca.lt/api/v1/seller/login"
//   );
   const result = await axios({
  method: 'post',
  url: "http://localhost:5000/api/v1/auth/login",
  headers: {

  }, 
  data: {
    email,
    password
  }
})
dispatch({ type: USER_LOGIN, payload: result });
};
