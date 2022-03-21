import React from "react";
import { Card, Col, Row, Breadcrumb } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./Addresses.css";
import { NavBar2 } from "../../Components/NavBar2/NavBar2";
import { Headers } from "../../Components/Header/Header";

export const Addresses = () => {
  const style = { background: "#0092ff", padding: "8px 0" };
  return (
    <>
      <Headers />
      <NavBar2 />
      <div>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Your Account</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Your Addresses</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-card-wrapper">
          <Row gutter={16}>
          <div className="card1">
            <Col span={8}>
              <Card style={{ width: 300, height: 300 }}>
                <PlusOutlined />
                <h1>Add Address</h1>
              </Card>
            </Col>
            </div>
            <Col span={8}>
              <Card style={{ width: 300, height: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card style={{ width: 300, height: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card style={{ width: 300, height: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card style={{ width: 300, height: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card style={{ width: 300, height: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
