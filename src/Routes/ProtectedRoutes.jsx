import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openModal } from "../Redux/Actions/modal_Action/action";
const ProtectedRoutes = ({ Component }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      navigate("/");
      dispatch(openModal(true));
    }
  });
  return <Component />;
};
export default ProtectedRoutes;
