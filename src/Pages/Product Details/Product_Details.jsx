import { Button, Card, notification } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../Redux/Actions/getProduct/getProductActions";
import { AddToCart } from "../../Redux/Actions/cartActions/cartActions";
import React from "react";
import "./Product_Details.css";

export const Product_Details = () => {

  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { Meta } = Card;
  const fetchData = useSelector(state=>state.getProductReducer.productData)
  console.log(fetchData)
  useEffect( () => {
      dispatch(getProductDetails());
  },[]);
  const openNotificationWithIcon = (type,placement) => {
  notification[type]({
    message: 'Item added successfully!',
    placement,
   
  });
};
  return (
    <div className="products">
      {fetchData.map((item, index) => (
      <div  className="card" key={index}>
        <Card 
    hoverable
    style={{ width:250}}
    cover={<img className="productImages" alt="product image" src={item.imgUrl} />}
  >
    <h2><Meta title={item.title} description={`₹ ${item.price}`}/></h2>
    <img className="fimage" src="/images/fassured.png" height='30' width='150'/>
    <div className="btn">
    <Button className="addToCart" onClick={()=>{openNotificationWithIcon('success','bottomRight');dispatch(AddToCart(item))}}>Add To Cart</Button>
    </div>
      </Card>
      </div>
      ))}
    </div>
  );
};
