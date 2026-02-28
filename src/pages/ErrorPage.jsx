import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          .error-wrapper {
            display: flex;
            justify-content: center;
            padding: 80px 20px;
          }

          .error-card {
            background: #ffffff;
            padding: 60px 40px;
            border-radius: 16px;
            text-align: center;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
            max-width: 500px;
            width: 100%;
            transition: 0.3s ease;
          }

          .error-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
          }

          .error-code {
            font-size: 72px;
            margin: 0;
            color: #ff4d4f;
            font-weight: bold;
          }

          .error-title {
            margin: 10px 0;
            font-size: 22px;
            font-weight: 600;
          }

          .error-desc {
            color: #6b7280;
            font-size: 14px;
            margin-bottom: 30px;
          }

          .error-button {
            padding: 12px 26px;
            border: none;
            border-radius: 8px;
            background: #1677ff;
            color: #ffffff;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s ease;
          }

          .error-button:hover {
            background: #0958d9;
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="error-wrapper">
        <div className="error-card">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Trang không tồn tại</h2>
          <p className="error-desc">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị xoá.
          </p>

          <button className="error-button" onClick={() => navigate("/")}>
            Quay về trang chủ
          </button>
        </div>
      </div>
    </>
  );
}
