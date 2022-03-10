import { USER_LOGIN } from "./userLogin";
import axios from "axios";

export const loginUser = () => async (dispatch) => {
    const result = await axios.post('https://tough-lion-86.loca.lt/login');
    dispatch({type : USER_LOGIN ,payload : result })
}