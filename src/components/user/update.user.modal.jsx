import { Input, Modal, notification } from "antd";
import React, { useEffect, useState } from "react";
import { createUserAPI, updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
  const { isModalOpen, setIsModalOpen, dataUpdate, setDataUpdate, loadUser } =
    props;

  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (dataUpdate) {
      setFullName(dataUpdate.fullName);
      setId(dataUpdate._id);
      setPhoneNumber(dataUpdate.phone);
    }
  }, [dataUpdate]);
  const handleSubmitBtn = async () => {
    const res = await updateUserAPI(id, fullName, phoneNumber);
    if (res.data) {
      notification.success({
        message: "Update user",
        description: "Update user successfully",
      });
      resetAndCloseModal();
      await loadUser();
    } else {
      notification.error({
        message: "Update user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setFullName("");
    setPhoneNumber("");
    setId("");
    setIsModalOpen(false);
    setDataUpdate(null);
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
