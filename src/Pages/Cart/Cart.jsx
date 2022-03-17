import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlusOutlined,MinusOutlined } from "@ant-design/icons";
import { Drawer, Button, Badge,notification} from "antd";
import { DeleteFromCart,Increment } from "../../Redux/Actions/cartActions/cartActions";
import "./Cart.css";
export const Cart = () => {
  const [visible, setVisible] = useState(false);
  const cartData = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <a className="cartBtn" onClick={showDrawer}>
        <span className="cart">Cart</span>
        <Badge count={cartData.length}>
          <img className="cartIcon" src="/images/cart.png" />
        </Badge>
      </a>

      <Drawer
        title="🛒 Cart"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <h2>You have {cartData.length} items in cart</h2>
        
        {cartData.map((item, index) => (
          <div className="cartDrawerItems" key={index}>
          <div className="titleBtn">
            <p className="text">
              {item.title} : ₹{item.price}
            </p>
            <div className="actions">
             <Button className="removeBtn" onClick={() =>dispatch(DeleteFromCart(item.id))}>
               <MinusOutlined/>
              </Button>
              {item.quantity}
            <Button className="addBtn" onClick={()=>dispatch(Increment(item.id))}>
                <PlusOutlined />
              </Button>
              </div>
              </div>
            <div className="imgDiv">
              <img className="drawerImage" src={item.imgUrl} height="100px" />
            </div>
          </div>
        ))}
        <hr />
        <h2>
          Total : ₹{cartData.reduce((total, item) => item.price + total, 0)}
        </h2>
        <hr />
      </Drawer>
    </>
  );
};
