import React, { useEffect, useState } from "react";
import { Flex, notification, Popconfirm, Space, Table, Tag } from "antd";
import { deleteUserAPI, fetchAllUserAPI } from "../../services/api.service";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";
import ViewUserDetail from "./view.user.detail";

const UserTable = (props) => {
  const { dataUsers, loadUser, current, pageSize, total } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [openDetail, setOpenDetail] = useState(false);
  const [dataDetail, setDataDetail] = useState(null);

  const handleSubmitBtn = async (id) => {
    const res = await deleteUserAPI(id);
    if (res.data) {
      notification.success({
        message: "Delete a user",
        description: "Delete user successfully",
      });
      await loadUser();
    } else {
      notification.error({
        message: "Delete user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      render: (_, record, index) => <span>{index + 1}</span>,
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      render: (avatar) => (
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${avatar}`}
          alt="avatar"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "Id",
      dataIndex: "_id",

      render: (_, record) => (
        <a
          onClick={() => {
            setOpenDetail(true);
            setDataDetail(record);
          }}
        >
          {record._id}
        </a>
      ),
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
              setDataUpdate(record);
              console.log("record", record);
              setIsModalOpen(true);
            }}
            style={{ cursor: "pointer", color: "orange" }}
          />
          <Popconfirm
            title="Delete a user"
            description="Are you sure to delete this user?"
            onConfirm={() => handleSubmitBtn(record._id)}
            okText="Yes"
            placement="topRight"
            cancelText="No"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />{" "}
          </Popconfirm>
        </div>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", { pagination, filters, sorter, extra });
  };

  return (
    <>
      <Table
        style={{ margin: "20px 20px" }}
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
        pagination={{
          current: current,
          pageSize: pageSize,
          showSizeChanger: true,
          total: total,
          showTotal: (total, range) => {
            return (
              <div>
                {" "}
                {range[0]}-{range[1]} trên {total} rows
              </div>
            );
          },
        }}
        onChange={onChange}
      />
      <UpdateUserModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <ViewUserDetail
        openDetail={openDetail}
        setOpenDetail={setOpenDetail}
        setDataDetail={setDataDetail}
        dataDetail={dataDetail}
        loadUser={loadUser}
      />
    </>
  );
};

export default UserTable;
