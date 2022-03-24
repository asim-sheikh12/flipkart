import React, { useEffect,useState } from "react";
import { Formik, ErrorMessage } from "formik";
import axios from "axios";
import { validationSchema } from "./Validations";
import { Field, Input, Select, Checkbox, Form } from "formik-antd";
import { Headers } from "../../Components/Header/Header";
import { NavBar2 } from "../../Components/NavBar2/NavBar2";
import "./addAddres.css";

export const AddAddress = () => {
  const [countryData, setCountryData] = useState([]);
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(false);
  const initialValues = {
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
  };
  useEffect(async () => {
    const response = await axios.get(
      "https://countriesnow.space/api/v0.1/countries/states"
    );
    setCountryData(response.data.data);
  }, [states]);

  const onSubmit = (values, submitProps) => {
    console.log("Form data", values);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };
  const handleChangeCountry = (state) => {
    const foundStates = countryData.find((c) => c.name === state)?.states;
    setStates(foundStates);
    setLoading(true);
  };
  return (
    <>
      <Headers />
      <NavBar2 />
      <div className="mainBody">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="formBody" autoComplete="off">
            <h1>Add a new address</h1>
            <span htmlFor="country">Country/Region</span>
            <Select
              placeholder="Select Country"
              name="country"
              showSearch
              onChange={(value) => handleChangeCountry(value)}
            >
              {countryData.map((option) => (
                <Select.Option key={option.iso3} value={option.name}>
                  {option.name}
                </Select.Option>
              ))}
            </Select>
            <ErrorMessage name="country">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <span>Full name</span>
            <Input name="name" />
            <ErrorMessage name="name">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <span>Mobile number</span>
            <Input
              name="phone"
              pattern="[0-9]*"
              addonBefore="🇮🇳+91"
              type="text"
              placeholder="Enter Your Mobile Number"
            />
            <ErrorMessage name="phone">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <span>Pincode</span>
            <Input
              name="pincode"
              pattern="[0-9]*"
              placeholder="6 diits [0-9] PIN code"
            />
            <ErrorMessage className="error" name="pincode">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <span>Flat, House no., Building, Company, Apartment</span>
            <Input name="addressLine1" />
            <ErrorMessage name="addressLine1">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <span>Area, Street, Sector, Village</span>
            <Field
              as="textarea"
              style={{ border: "1px solid #d9d9d9", outline: "none" }}
              name="addressLine2"
            />
            <ErrorMessage name="addressLine2">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <span>Landmark</span>
            <Input name="landmark" placeholder="E.g. near apollo hospital" />
            <ErrorMessage name="landmark">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <span>Town/City</span>
            <Input name="city" />
            <ErrorMessage name="city">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <span htmlFor="state">State</span>
            <Select notFoundContent={<p className="error">Please select country first</p>} name="state" placeholder="Select State">
              {states.map((option, index) => (
                <Select.Option key={index} value={option.name}>
                  {option.name}
                </Select.Option>
              ))}
            </Select>
            {loading&&
            <ErrorMessage name="state">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            }
            <Checkbox name="checked">Make this my default address</Checkbox>
            <h2>Add delivery instructions</h2>
            <span>
              Preferences are used to plan your delivery. However, shipments can
              sometimes arrive early or later than planned.
            </span>
            <h2>Address Type</h2>
            <Select placeholder="Select an Address Type" name="addressType">
              <Select.Option key={1}>Home(7 am - 9 pm delivery)</Select.Option>
              <Select.Option key={2}>
                Office/Commercial(10 am - 6 pm delivery)
              </Select.Option>
            </Select>
            <ErrorMessage name="addressType">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <div>
              <button type="submit" className="submit-btn">
                Add address
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};
