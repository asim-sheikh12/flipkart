import React, { useState } from "react";
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
  let name, value;
  const handleOnChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  return (
    <div className="formContainer">
      <form>
        <label>
          First Name:
          <input
            name="fname"
            value={formData.fname}
            type="text"
            onChange={handleOnChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastname"
            value={formData.lastname}
            type="text"
            onChange={handleOnChange}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            value={formData.email}
            type="text"
            onChange={handleOnChange}
          />
        </label>
        <label>
          Mobile Number:
          <input
            name="phone"
            value={formData.phone}
            type="number"
            onChange={handleOnChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            value={formData.password}
            type="password"
            onChange={handleOnChange}
          />
        </label>
        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            type="password"
            onChange={handleOnChange}
          />
        </label>
      </form>
    </div>
  );
};
