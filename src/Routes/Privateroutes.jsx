import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { openModal } from "../Redux/Actions/modal_Action/action";
export const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if ((!localStorage.getItem("userToken")) && (!localStorage.getItem("adminToken"))) {
      navigate("/");
      dispatch(openModal(true));
    }
  });
  return (
    <Component />
  )
}
