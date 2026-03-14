import React, { useEffect, useState } from "react";
import { Flex, Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";

const UserTable = (props) => {
  const { dataUsers } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",

      render: (_, record) => <a href="#">{record._id}</a>,
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              setIsModalOpen(true);
              setId(record._id);
              setFullName(record.fullName);
              setEmail(record.email);
              setPassword(record.password);
              setPhoneNumber(record.phone);
            }}
            style={{ cursor: "pointer", color: "orange" }}
          />
          <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
        </div>
      ),
    },
  ];

  return (
    <>
      <Table
        style={{ margin: "20px 20px" }}
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
      />
      <UpdateUserModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        id={id}
        fullName={fullName}
        email={email}
        password={password}
        phoneNumber={phoneNumber}
        setFullName={setFullName}
        setEmail={setEmail}
        setPassword={setPassword}
        setPhoneNumber={setPhoneNumber}
      />
    </>
  );
};

export default UserTable;
