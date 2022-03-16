import reducer from '../modal_Reducer/reducer';
import userReducer from '../userLogin/userLoginReducer';
import getProductReducer from '../getProductReducer/getProductReducer';
import cartReducer from '../cartReducer/cartReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers(
    {
        reducer,
        userReducer,
        getProductReducer,
        cartReducer
    }
)
export default rootReducer;