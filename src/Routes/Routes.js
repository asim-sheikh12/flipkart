import React from 'react';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Profile } from '../Pages/Profile/Profile';
import { FlipkartPlus } from '../Pages/Plus/FlipkartPlus';
import { Orders } from '../Pages/Orders/Orders';
import { Wishlist } from '../Pages/Wishlist/Wishlist';
import { Rewards } from '../Pages/Rewards/Rewards';
import { GiftCard } from '../Pages/GiftCard/GiftCard';
import {Register} from '../Pages/Register/Register'
import App from '../App/App';

export const Routing = () => {
  return (
    <div>
        <Router>
<Routes><Route exact path='/' element={<App/>}/></Routes>       
<Routes><Route exact path='/profile' element={<Profile/>}/></Routes>
<Routes><Route exact path='/plus' element={<FlipkartPlus/>}/></Routes>
<Routes><Route exact path='/wishlist' element={<Wishlist/>}/></Routes>
<Routes><Route exact path='/rewards' element={<Rewards/>}/></Routes>
<Routes><Route exact path='/giftcard' element={<GiftCard/>}/></Routes>
<Routes><Route exact path='/orders' element={<Orders/>}/></Routes>
<Routes><Route exact path='/register' element={<Register/>}/></Routes>
        </Router>
    </div>
  )
}
