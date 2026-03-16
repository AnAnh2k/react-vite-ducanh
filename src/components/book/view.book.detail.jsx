import { Button, Drawer, notification } from "antd";
import React, { useState } from "react";

const ViewBookDetail = (props) => {
  const {
    openDetailBook,
    setOpenDetailBook,
    dataDetailBook,
    setDataDetailBook,
    loadBook,
  } = props;

  const resetAndCloseModal = () => {
    setOpenDetailBook(false);
    setDataDetailBook(null);
  };

  return (
    <Drawer
      width={"40vw"}
      title="User Detail"
      closable={{ "aria-label": "Close Button" }}
      onClose={() => resetAndCloseModal()}
      open={openDetailBook}
    >
      {dataDetailBook ? (
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div>ID: {dataDetailBook._id}</div>
          <div>Full Name: {dataDetailBook.title}</div>
          <div>Email: {dataDetailBook.author}</div>
          <div>Phone: {dataDetailBook.category}</div>
          <div>
            Price:{" "}
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(dataDetailBook.price)}
          </div>
          <div>Quantity: {dataDetailBook.quantity}</div>
          <div>Quantity: {dataDetailBook.sold}</div>

          <div>
            <p style={{ marginBottom: "20px" }}>Thumbnail:</p>
            <img
              style={{
                height: "150px",
                width: "150px",
                objectFit: "cover",
                border: "1px solid #ccc",
              }}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataDetailBook.thumbnail}`}
              alt="thumbnail"
            />
          </div>
        </div>
      ) : (
        <div>No data</div>
      )}
    </Drawer>
  );
};

export default ViewBookDetail;
