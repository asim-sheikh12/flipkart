import { USER_LOGIN } from "./userLogin";
import axios from "axios";

export const loginUser = (formData) => async (dispatch) => {
  await axios
    .post("https://cold-grasshopper-8.loca.lt/api/user_login", formData)
    .then((res) => {
      console.log(res.data.data.fullName);
      dispatch({ type: USER_LOGIN, payload: res.data.data });
    })
    .catch((error) => {
      console.log("Error>>", error);
    });
};
