import axios from "axios";
import { SELLER_LOGIN } from "./sellerLoginType";
export const loginSeller = (formData) => async (dispatch) => {
  const { fullName, email, phone, password } = formData;
//   const result = await axios({
//     method: "post",
//     url: "https://tall-squid-55.loca.ltauth/seller/register",
//     headers: {
//       "Content-Type": "application/json",
//     },
//    formData
//   });
//   console.log(result)
  axios.post(`https://tall-squid-55.loca.lt/auth/seller/register`, { fullName, email, phone, password })
      .then(res => {
        console.log(res)
      })
//       })
//   axios.post("https://tall-squid-55.loca.ltauth/seller/register", {
//  fullName, email, phone, password 
// })      
// .then((response) => {
//     console.log(response)
//     dispatch({type: SELLER_LOGIN, data: response})
// })
}
