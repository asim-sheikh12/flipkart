import { USER_LOGIN } from "../../Actions/user_Login/userLogin";

const initialState = {
    userData : []
}

const userReducer = (state= initialState,action) => {
    switch(action.type)
    {
        case USER_LOGIN : 
        return {
            ...state, userData : action.payload
        }
         default:
      return state;
    }
}
export default userReducer;
