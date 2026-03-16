import { ArrowRightOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);
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
                <Input.Password />
              </Form.Item>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {" "}
                <Button type="primary" htmlType="submit">
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
