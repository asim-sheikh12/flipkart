import { Form, Input, Button, Checkbox } from "antd";
import { useState } from "react";
import "./LoginForm.css";

export const LoginForm = () => {
  const [email,setEmail] = useState();
  const[input,setInput]=useState();
  const [password,setPassword] = useState();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="main-body">
      <img className="modalImage" src="/images/Login.png" />
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
      {console.log(typeof(email))}
        <Form.Item
          name="email"
          rules={[
            { 
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please enter valid Email ID/Mobile number",
            },
          ]}
        >
          <Input
            type="email"
            placeholder="Enter Email/Mobile Number"
            bordered={false}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <div className="inputPassword">
            <Input
              type="password"
              placeholder="Enter Password"
              bordered={false}
            />
            <a className="Forgot" href="">
              Forgot?
            </a>
          </div>
        </Form.Item>
        <Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            noStyle
          ></Form.Item>
        </Form.Item>
        <Form.Item>
          <div className="modalButtons">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button modalLogin-btn"
            >
              Log in
            </Button>
            <p className="or">OR</p>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button otp-btn"
            >
              Request OTP
            </Button>
          </div>
        </Form.Item>
        <a className="NewUser" href="#">
          New to Flipkart? Create an account
        </a>
      </Form>
    </div>
  );
};
