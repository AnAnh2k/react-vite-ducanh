import { Button, Input, Modal, notification } from "antd";
import React, { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = (props) => {
  const { loadUser } = props;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phoneNumber);
    if (res.data) {
      notification.success({
        message: "Create user",
        description: "Create user successfully",
      });
      resetAndCloseModal();
      await loadUser();
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
    <div className="user-form" style={{ margin: "10px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Table Users</h3>
        <Button
          type="primary"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Create User
        </Button>
      </div>
      <Modal
        title="Create User"
        open={isModalOpen}
        onOk={() => handleSubmitBtn()}
        onCancel={() => resetAndCloseModal()}
        okText="Create"
        maskClosable={false}
      >
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
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
    </div>
  );
};

export default UserForm;
