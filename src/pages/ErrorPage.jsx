import React from "react";

export default function ErrorPage() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.code}>404</h1>
        <h2 style={styles.title}>Trang không tồn tại</h2>
        <p style={styles.desc}>
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị xoá.
        </p>

        <button style={styles.button}>Quay về trang chủ</button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "60px 20px",
  },
  card: {
    background: "#ffffff",
    padding: "50px 40px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    maxWidth: "500px",
    width: "100%",
  },
  code: {
    fontSize: "64px",
    margin: "0",
    color: "#ff4d4f",
  },
  title: {
    margin: "10px 0",
    fontSize: "22px",
  },
  desc: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "25px",
  },
  button: {
    padding: "10px 22px",
    border: "none",
    borderRadius: "6px",
    background: "#1677ff",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
};
