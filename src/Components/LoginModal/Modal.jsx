import React, { useState,useEffect } from 'react';
import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { openModal } from '../../Redux/Actions/action';
import { LoginForm } from '../Forms/LoginForm';

export const LoginModal = ({data}) => {
  const [visible, setVisible] = useState(data);
  const appDispatch = useDispatch();
  return (
      <>
      
      <Modal
        centered
        visible={visible}
        onOk={() => {appDispatch(openModal(false)); setVisible(false)}}
        onCancel={() => {appDispatch(openModal(false)); setVisible(false)}}
        width={1000}
        height={500}
      >
      <img src='/images/Login.png'/>
        <LoginForm/>
       
      </Modal> 
      </>
  );
};
