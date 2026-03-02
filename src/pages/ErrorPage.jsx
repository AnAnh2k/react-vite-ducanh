import { useRouteError, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const styles = {
    wrapper: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      fontFamily: "Segoe UI, sans-serif",
    },
    card: {
      background: "#fff",
      padding: "40px 60px",
      borderRadius: "16px",
      textAlign: "center",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      maxWidth: "400px",
      width: "90%",
      animation: "fadeIn 0.5s ease-in-out",
    },
    code: {
      fontSize: "80px",
      fontWeight: "bold",
      color: "#764ba2",
      marginBottom: "10px",
    },
    title: {
      fontSize: "22px",
      marginBottom: "15px",
      color: "#333",
    },
    message: {
      fontSize: "16px",
      marginBottom: "25px",
      color: "#666",
    },
    button: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: hover ? "#5a3696" : "#764ba2",
      color: "white",
      fontSize: "14px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      transform: hover ? "translateY(-2px)" : "translateY(0)",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.code}>404</h1>
        <h2 style={styles.title}>Oops! Có lỗi xảy ra</h2>

        <p style={styles.message}>
          {error?.statusText || error?.message || "Trang không tồn tại"}
        </p>

        <button
          style={styles.button}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => navigate("/")}
        >
          Quay về trang chủ
        </button>
      </div>
    </div>
  );
}
