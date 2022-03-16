import { Input,Select,Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterForm.css";
export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    role: "",
    password: "",
  });
  const [val, setVal] = useState("");
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(0, 120, 212)";
  });
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    formData.phone = val;
    e.preventDefault();
    console.log(formData);
  };
  const OTP = () => {
    console.log("OTP BUTTON");
  };
  return (
    <>
      <Link to="/">
        <img className="logo" src="images/Flipkart.jpg" />
      </Link>
      <div className="maindiv">
        <form className="formBody" autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <h1 className="heading">Create your Seller Account</h1>
          </div>
          <div>
            <label>
              <Input
                name="fname"
                placeholder="Enter Your First Name"
                value={formData.fname}
                type="text"
                onChange={handleOnChange}
              />
            </label>
          </div>
          <div>
            <label>
              <Input
                name="lastname"
                autoComplete="off"
                placeholder="Enter Your Last Name"
                value={formData.lastname}
                type="text"
                onChange={handleOnChange}
              />
            </label>
          </div>
          <div>
            <label>
              <Input
                name="email"
                placeholder="Enter Your Email Address"
                value={formData.email}
                type="text"
                onChange={handleOnChange}
              />
            </label>
          </div>
          <div className="mobile">
            <label
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                pattern="[0-9]*"
                addonBefore="🇮🇳+91"
                type="text"
                addonAfter={
                  <button
                    disabled={val.length != 10}
                    onClick={() => OTP()}
                    className="OTP-btn"
                  >
                    Send OTP
                  </button>
                }
                placeholder="Enter Your Mobile Number"
                value={val}
                onChange={(e) =>
                  setVal((v) => (e.target.validity.valid ? e.target.value : v))
                }
              />
            </label>
          </div>
          <div>
            <label>
              <Select
              placeholder='Role'
        style={{
          width: 200,
        }}
      >
        <option value="Customer">Customer</option>
        <option value="Seller">Seller</option>
      </Select>
            </label>
          </div>
          <div>
            <label>
              <Input
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                type="password"
                onChange={handleOnChange}
              />
            </label>
          </div>
          <div>
            <label>
              <TextArea
                name="address"
                placeholder="Enter Your Address"
                value={formData.address}
                type="password"
                onChange={handleOnChange}
              />
            </label>
          </div>
          <div>
            <button className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
      <div>
        <img className="image" src="/images/seller.png"/>
      </div>
    </>
  );
};
