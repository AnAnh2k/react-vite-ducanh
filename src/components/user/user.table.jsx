import React, { useEffect, useState } from "react";
import { Flex, Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([
    {
      _id: "1",
      fullName: "John Doe",
      email: "john.doe@example.com",
    },
    {
      _id: "2",
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
    },
  ]);

  useEffect(() => {
    loadUser();
  }, []);
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
    setDataUsers(res.data);
  };

  loadUser();
  return (
    <Table
      style={{ margin: "20px 20px" }}
      columns={columns}
      dataSource={dataUsers}
      rowKey={"_id"}
    />
  );
};

export default UserTable;
