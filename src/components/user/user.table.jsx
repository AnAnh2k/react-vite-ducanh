import React, { useState } from "react";
import { Flex, Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "email",
      dataIndex: "email",
    },
  ];

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    // setDataUsers(res.data);
  };

  loadUser();
  return <Table columns={columns} dataSource={dataUsers} />;
};

export default UserTable;
