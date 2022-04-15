import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { openModal } from "../Redux/Actions/modal_Action/action";
 const Privateroutes = ({ Component }) => {
   const navigate = useNavigate();
  const dispatch = useDispatch();
 useEffect(()=>{
 if(!localStorage.getItem('userToken')) {  
      navigate("/");
      dispatch(openModal(true))
  };
 })
  
  return localStorage.getItem('userToken') ? <Component/> : <Navigate to ='/'/>

};
export default Privateroutes;
