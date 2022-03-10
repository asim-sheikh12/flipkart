import reducer from '../modal_Reducer/reducer';
import userReducer from '../userLogin/userLoginReducer';
import getProductReducer from '../getProductReducer/getProductReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers(
    {
        reducer,
        userReducer,
        getProductReducer
    }
)
export default rootReducer;