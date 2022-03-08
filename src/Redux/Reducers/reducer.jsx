import { OPEN_LOGIN_MODEL } from "../Actions/actonType";

const initialState = {
    modalStatus : false
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LOGIN_MODEL:
        return {...state, modalStatus: action.status};
        default:
  return state
  }
  
}
  export default reducer;
