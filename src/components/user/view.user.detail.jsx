import { Drawer } from "antd";
import React from "react";

const ViewUserDetail = (props) => {
  const { openDetail, setOpenDetail, dataDetail, setDataDetail } = props;

  const resetAndCloseModal = () => {
    setOpenDetail(false);
    setDataDetail(null);
  };
  return (
    <Drawer
      title="User Detail"
      closable={{ "aria-label": "Close Button" }}
      onClose={() => resetAndCloseModal()}
      open={openDetail}
    >
      {dataDetail ? (
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <div>ID: {dataDetail?._id}</div>
          <div>Full Name: {dataDetail?.fullName}</div>
          <div>Email: {dataDetail?.email}</div>
          <div>Phone: {dataDetail?.phone}</div>
        </div>
      ) : (
        <div>No data</div>
      )}
    </Drawer>
  );
};

export default ViewUserDetail;
