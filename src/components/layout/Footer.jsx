import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>My Website</h3>
          <p>Xây dựng bởi Đức Anh 🚀</p>
        </div>

        <div className="footer-section">
          <h3>Liên kết</h3>
          <a href="/">Trang chủ</a>
          <a href="/about">Giới thiệu</a>
          <a href="/contact">Liên hệ</a>
        </div>

        <div className="footer-section">
          <h3>Liên hệ</h3>
          <p>Email: anducanh125@gmail.com</p>
          <p>Phone: 0868 xxx xxx</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Đức Anh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
