import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { Formik } from "formik";
import { Select, Checkbox, Input } from "antd";
import { Headers } from "../../Components/Header/Header";
import { NavBar2 } from "../../Components/NavBar2/NavBar2";
import { useState, useMemo } from "react";
import "./addAddres.css";
import countryList from "react-select-country-list";

export const AddAddress = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [addType, setAddType] = useState("");
  const [val, setVal] = useState("");
  const [formData, setFormData] = useState({
    country: "",
    name: "",
    phone: "",
    pincode: "",
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    city: "",
    state: "",
    checked: "",
    addressType: "",
  });
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (country) => {
    setCountry(country);
  };
  const handleOnChange2 = (state) => {
    setState(state);
  };
  const changeHandler3 = (addType) => {
    setAddType(addType);
  };
  const handleSubmit = (e) => {
    formData.phone = val;
    formData.country = country;
    formData.state = state;
    formData.addressType = addType;
    e.preventDefault();
    console.log(formData);
  };
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  function onChange(e) {
    formData.checked = e.target.checked;
  }

  return (
    <>
      <Headers />
      <NavBar2 />
      <div className="mainBody">
        <Formik
          initialValues={{
            country: "",
            name: "",
            phone: "",
            pincode: "",
            addressLine1: "",
            addressLine2: "",
            landmark: "",
            city: "",
            state: "",
            checked: "",
            addressType: "",
          }}
        >
          <form className="formBody" onSubmit={handleSubmit} autoComplete="off">
            <h1>Add a new address</h1>
            <span>Country/Region</span>
            <Select
              showSearch
              name="country"
              placeholder="Select Country"
              options={options}
              value={country}
              onChange={changeHandler}
            />
            <span>Full name</span>
            <Input name="name" onChange={handleOnChange} />
            <span>Mobile number</span>
            <Input
              name="phone"
              pattern="[0-9]*"
              addonBefore="🇮🇳+91"
              type="text"
              placeholder="Enter Your Mobile Number"
              value={val}
              onChange={(e) =>
                setVal((v) => (e.target.validity.valid ? e.target.value : v))
              }
            />
            <span>Pincode</span>
            <Input
              onChange={handleOnChange}
              name="pincode"
              pattern="[0-9]*"
              placeholder="6 diits [0-9] PIN code"
            />
            <span>Flat, House no., Building, Company, Apartment</span>
            <Input onChange={handleOnChange} name="addressLine1" />
            <span>Area, Street, Sector, Village</span>
            <TextArea onChange={handleOnChange} name="addressLine2"></TextArea>
            <span>Landmark</span>
            <Input
              onChange={handleOnChange}
              name="landmark"
              placeholder="E.g. near apollo hospital"
            />
            <span>Town/City</span>
            <Input onChange={handleOnChange} name="city" />
            <span>State</span>
            <Select
              value={state}
              onChange={handleOnChange2}
              placeholder="Select State"
            >
              <Select.Option value="Andhra Pradesh">
                Andhra Pradesh
              </Select.Option>
              <Select.Option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </Select.Option>
              <Select.Option value="Arunachal Pradesh">
                Arunachal Pradesh
              </Select.Option>
              <Select.Option value="Assam">Assam</Select.Option>
              <Select.Option value="Bihar">Bihar</Select.Option>
              <Select.Option value="Chandigarh">Chandigarh</Select.Option>
              <Select.Option value="Chhattisgarh">Chhattisgarh</Select.Option>
              <Select.Option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </Select.Option>
              <Select.Option value="Daman and Diu">Daman and Diu</Select.Option>
              <Select.Option value="Delhi">Delhi</Select.Option>
              <Select.Option value="Lakshadweep">Lakshadweep</Select.Option>
              <Select.Option value="Puducherry">Puducherry</Select.Option>
              <Select.Option value="Goa">Goa</Select.Option>
              <Select.Option value="Gujarat">Gujarat</Select.Option>
              <Select.Option value="Haryana">Haryana</Select.Option>
              <Select.Option value="Himachal Pradesh">
                Himachal Pradesh
              </Select.Option>
              <Select.Option value="Jammu and Kashmir">
                Jammu and Kashmir
              </Select.Option>
              <Select.Option value="Jharkhand">Jharkhand</Select.Option>
              <Select.Option value="Karnataka">Karnataka</Select.Option>
              <Select.Option value="Kerala">Kerala</Select.Option>
              <Select.Option value="Madhya Pradesh">
                Madhya Pradesh
              </Select.Option>
              <Select.Option value="Maharashtra">Maharashtra</Select.Option>
              <Select.Option value="Manipur">Manipur</Select.Option>
              <Select.Option value="Meghalaya">Meghalaya</Select.Option>
              <Select.Option value="Mizoram">Mizoram</Select.Option>
              <Select.Option value="Nagaland">Nagaland</Select.Option>
              <Select.Option value="Odisha">Odisha</Select.Option>
              <Select.Option value="Punjab">Punjab</Select.Option>
              <Select.Option value="Rajasthan">Rajasthan</Select.Option>
              <Select.Option value="Sikkim">Sikkim</Select.Option>
              <Select.Option value="Tamil Nadu">Tamil Nadu</Select.Option>
              <Select.Option value="Telangana">Telangana</Select.Option>
              <Select.Option value="Tripura">Tripura</Select.Option>
              <Select.Option value="Uttar Pradesh">Uttar Pradesh</Select.Option>
              <Select.Option value="Uttarakhand">Uttarakhand</Select.Option>
              <Select.Option value="West Bengal">West Bengal</Select.Option>
            </Select>
            <Checkbox onChange={onChange}>
              Make this my default address
            </Checkbox>
            <h2>Add delivery instructions</h2>
            <span>
              Preferences are used to plan your delivery. However, shipments can
              sometimes arrive early or later than planned.
            </span>
            <h2>Address Type</h2>
            <Select
              placeholder="Select an Address Type"
              value={addType}
              onChange={changeHandler3}
            >
              <Select.Option key={1}>Home(7 am - 9 pm delivery)</Select.Option>
              <Select.Option key={2}>
                Office/Commercial(10 am - 6 pm delivery)
              </Select.Option>
            </Select>
            <div>
              <button className="submit-btn">Add address</button>
            </div>
          </form>
        </Formik>
      </div>
    </>
  );
};
