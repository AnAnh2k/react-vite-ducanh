import { Button, Drawer } from "antd";
import React from "react";

const ViewUserDetail = (props) => {
  const { openDetail, setOpenDetail, dataDetail, setDataDetail } = props;

  const resetAndCloseModal = () => {
    setOpenDetail(false);
    setDataDetail(null);
  };
  return (
    <Drawer
      width={"40vw"}
      title="User Detail"
      closable={{ "aria-label": "Close Button" }}
      onClose={() => resetAndCloseModal()}
      open={openDetail}
    >
      {dataDetail ? (
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div>ID: {dataDetail?._id}</div>
          <div>Full Name: {dataDetail?.fullName}</div>
          <div>Email: {dataDetail?.email}</div>
          <div>Phone: {dataDetail?.phone}</div>
          <div>
            <p style={{ marginBottom: "20px" }}>Avatar:</p>
            <img
              style={{
                height: "150px",
                width: "150px",
                objectFit: "cover",
                border: "1px solid #ccc",
              }}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail?.avatar}`}
              alt="Avatar"
            />
          </div>
          <div>
            <label
              htmlFor="avatar"
              style={{
                display: "block",
                width: "fit-content",
                marginTop: "15px",
                padding: "8px 18px",
                background: "#1677ff",
                borderRadius: "5px",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              Upload avatar
            </label>
            <input type="file" id="avatar" hidden />
          </div>
        </div>
      ) : (
        <div>No data</div>
      )}
    </Drawer>
  );
};

export default ViewUserDetail;
