import { ArrowRightOutlined, ArrowUpOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  message,
  notification,
  Row,
} from "antd";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUserAPI } from "../services/api.service";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(false);
  const { setUser } = useContext(AuthContext);

  const onFinish = async (values) => {
    setIsLoading(true);
    const res = await loginUserAPI(values.email, values.password);
    if (res.data) {
      message.success("Login user successfully");
      localStorage.setItem("access_token", res.data.access_token);
      setUser(res.data.user);
      form.resetFields();
      navigate("/");
    } else {
      notification.error({
        message: "Login user",
        description: JSON.stringify(res.message),
      });
    }
    setIsLoading(false);
  };
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Login Page</h2>
      <Row justify={"center"} style={{ marginTop: "30px" }}>
        <Col xs={24} md={16} lg={8}>
          <fieldset
            style={{
              padding: "15px",
              margin: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <legend>Đăng nhập</legend>
            <Form
              form={form}
              name="basic"
              layout="vertical"
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      form.submit();
                    }
                  }}
                />
              </Form.Item>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {" "}
                <Button type="primary" htmlType="submit" loading={loading}>
                  Login
                </Button>
                <Link to="/">
                  Go to HomePage <ArrowRightOutlined />
                </Link>
              </div>
            </Form>
            <Divider />
            <div style={{ textAlign: "center" }}>
              Chưa có tài khoản?<Link to={"/register"}> Đăng ký ngay</Link>
            </div>
          </fieldset>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
