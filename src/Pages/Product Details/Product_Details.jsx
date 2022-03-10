import { Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../Redux/Actions/getProduct/getProductActions";
import React from "react";
import "./Product_Details.css";

export const Product_Details = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const fetchData = useSelector(state=>state.getProductReducer.productData)
  useEffect( () => {
      dispatch(getProductDetails());
  },[fetchData]);
  return (
    <div className="site-card-wrapper Card">
      {data.map((item, index) => (
        <Row gutter={16}>
          <Col span={8}>
            <Card bordered={true}>
              <img src={item.image} height="200px" width="200px" />
              <h3>$ {item.price} </h3>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};
