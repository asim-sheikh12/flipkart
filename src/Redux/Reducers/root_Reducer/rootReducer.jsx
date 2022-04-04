import reducer from '../modal_Reducer/reducer';
import userReducer from '../userLogin/userLoginReducer';
import getProductReducer from '../getProductReducer/getProductReducer';
import cartReducer from '../cartReducer/cartReducer';
import productDescriptionReducer from '../productDescriptionReducer/descriptionReducer';
import sellerReducer from '../sellerReducer/sellerReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers(
    {
        reducer,
        userReducer,
        getProductReducer,
        cartReducer,
        productDescriptionReducer,
        sellerReducer
    }
)
export default rootReducer;