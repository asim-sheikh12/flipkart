import { Form, Input, Button, Checkbox } from "antd";
import { useState } from "react";
import "./LoginForm.css";
import { loginUser } from "../../Redux/Actions/user_Login/userLoginAction";
import { useDispatch } from "react-redux";

export const LoginForm = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const dispatch = useDispatch();
  
  const onFinish = () => {
        const userData = {
          email,
          password
        }
        dispatch(loginUser());
        console.log(userData)
  };
  return (
    <div className="main-body">
      <img className="modalImage" src="/images/Login.png" />
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          // remember: true,
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
            value={email}
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
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
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
