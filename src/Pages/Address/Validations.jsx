import * as Yup from "yup";
const phoneRegExp =  /^([+]\d{2})?\d{10}$/

export const validationSchema = Yup.object({
    name: Yup.string().required("*Required"),
    country: Yup.string().required("Required"),
    phone: Yup.string().required("Required").matches(phoneRegExp, 'Phone number is not valid'),
    pincode: Yup.string().required("Required"),
    addressLine1: Yup.string().required("Required"),
    addressLine2: Yup.string().required("Required"),
    landmark: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    addressType: Yup.string().required("Required"),
  });