import { Form, Input, Button, Checkbox } from "antd";
import { useState, useEffect } from "react";
import "./LoginForm.css";
import { loginUser } from "../../Redux/Actions/user_Login/userLoginAction";
import { useDispatch } from "react-redux";

export const LoginForm = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    console.log(formData)
    setFormErrors(validate(formData));
    setIsSubmit(true);
    if(formData.email&&formData.password)
    {dispatch(loginUser(formData))};
  };
  
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const mobilePattern =/^(\+\d{1,3}[- ]?)?\d{10}$/; 
    
    if (!values.email) {
      errors.email = "Please enter valid Email ID/Mobile number!";
    }else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (formData.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <div className="main-body">
      <img className="modalImage" src="/images/Login.png" />
      <Form
        name="normal_login"
        className="login-form"
        autoComplete="off"
        initialValues={
          {
            // remember: true,
          }
        }
        onFinish={handleSubmit}
      >
        {/* {console.log(typeof email)} */}
        <Form.Item>
          <Input
            name="email"
            type="text"
            placeholder="Enter Email/Mobile Number"
            bordered={false}
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Item>
        <p className="error">{formErrors.email}</p>
        <Form.Item>
          <div className="inputPassword">
            <Input
              name="password"
              type="password"
              placeholder="Enter Password"
              bordered={false}
              value={formData.password}
              onChange={handleChange}
            />
            <a className="Forgot" href="">
              Forgot?
            </a>
          </div>
        </Form.Item>
        <p className="error">{formErrors.password}</p>
          <Form.Item
            name="remember"
            valuePropName="checked"
            noStyle
          ></Form.Item>
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
