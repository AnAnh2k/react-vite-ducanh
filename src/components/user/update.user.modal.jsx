import { Input, Modal, notification } from "antd";
import React, { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
  const {
    isModalOpen,
    setIsModalOpen,
    id,
    fullName,
    email,
    password,
    phoneNumber,

    setFullName,
    setEmail,
    setPassword,
    setPhoneNumber,
  } = props;

  const handleSubmitBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phoneNumber);
    if (res.data) {
      notification.success({
        message: "Create user",
        description: "Create user successfully",
      });
      resetAndCloseModal();
      //   await loadUser();
    } else {
      notification.error({
        message: "Create user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Update a User"
      open={isModalOpen}
      onOk={() => handleSubmitBtn()}
      onCancel={() => resetAndCloseModal()}
      okText="SAVE"
      maskClosable={false}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>ID</span>
          <Input value={id} disabled />
        </div>
        <div>
          <span>FullName</span>
          <Input
            placeholder="FullName"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Phone Number</span>
          <Input
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default UpdateUserModal;
