import { Card, Col, Row } from 'antd';
import { useEffect,useState } from 'react';
import React from 'react';
import './Product_Details.css'

export const Product_Details = () => { 
      const [data, setData] = useState([]);
useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
                setData(result);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
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
  )
}
