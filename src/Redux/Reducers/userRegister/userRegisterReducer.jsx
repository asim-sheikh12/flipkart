import {
  REGISTER_SUCCESS,REGISTER_PENDING,REGISTER_FAILURE
}  from '../../Actions/user_Register/userRegisterTypes'

const initialState = {
  registerData: [],
  error: "",
  pending : false
};

const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerData: action.payload,
      };
    case REGISTER_FAILURE:
       state.error = action.payload
      return {
          ...state,
        error: action.payload,  
      };
    case REGISTER_PENDING:
      return {
          ...state,
        pending: action.payload,
      };

    default:
      return state;
  }
};
export default userRegisterReducer;
