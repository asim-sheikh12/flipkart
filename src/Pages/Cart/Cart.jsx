import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Drawer, Button, Badge } from 'antd';
import './Cart.css'
export const Cart = () => {
  const [visible, setVisible] = useState(false);
  const cartData = useSelector(state=>state.cartReducer)
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
   
      <a className='cartBtn' onClick={showDrawer}>
       <span className="cart">Cart</span>
       <Badge count={cartData.length}>
       <img className="cartIcon" src="/images/cart.png" />
       </Badge>
     
      </a>
      
      <Drawer title="🛒 Cart" placement="right" onClose={onClose} visible={visible}>
        <h2>You have {cartData.length} items in cart</h2>
        <hr/>
        {cartData.map((item)=>
          (<div className='cartDrawerItems'> 
            <p className='text'>{item.title}</p>
            <div className='imgDiv'>
            <img className='drawerImage' src={item.imgUrl} height='100px'/>
            <p className='text'>₹{item.price}</p>
            </div>
          </div>)
        )}
        <hr/>
      <h2>Total : {cartData.reduce((total, item) => item.price + total, 0)}</h2>
      <hr/>
      </Drawer>
    </>
  );
};	