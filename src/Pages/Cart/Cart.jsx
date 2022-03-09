import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import './Cart.css'
export const Cart = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <a className='cartBtn' onClick={showDrawer}>
       <img className="cartIcon" src="/images/cart.png" />
      <span className="cart">Cart</span>
      </a>
      <Drawer title="🛒 Cart" placement="right" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};	