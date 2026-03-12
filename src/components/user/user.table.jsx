import React, { useEffect, useState } from "react";
import { Flex, Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";

const UserTable = (props) => {
  const { dataUsers } = props;
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
