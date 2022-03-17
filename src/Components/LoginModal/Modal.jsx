import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { openModal } from "../../Redux/Actions/modal_Action/action";
import { LoginForm } from "../Forms/LoginForm";
import "./Modal.css";

export const LoginModal = ({ data }) => {
  const [visible, setVisible] = useState(data);
  const appDispatch = useDispatch();
  return (
    <>
      <Modal
        className="Modal"
        centered
        visible={visible}
        // onOk={() => {appDispatch(openModal(false)); setVisible(false)}}
        onCancel={() => {
          appDispatch(openModal(false));
          setVisible(false);
        }}
        width={600}
        height={500}
        footer={null}
      >
        <LoginForm />
      </Modal>
    </>
  );
};
