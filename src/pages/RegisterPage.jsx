import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  notification,
  Row,
} from "antd";
import React from "react";
import { registerUserAPI } from "../services/api.service";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);
    const res = await registerUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone,
    );
    if (res.data) {
      notification.success({
        message: "Register a user",
        description: "Register user successfully",
      });
      form.resetFields();
      navigate("/login");
    } else {
      notification.error({
        message: "Register user",
        description: JSON.stringify(res.message),
      });
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Register a User
      </h1>

      <Form
        form={form}
        name="basic"
        layout="vertical"
        style={{
          marginTop: "50px",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Row justify={"center"}>
          <Col xs={24} md={16}>
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col xs={24} md={16}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col xs={24} md={16}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col xs={24} md={16}>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Please input your phone number!" },
                {
                  pattern: new RegExp(/\d+/g),
                  message: "Wrong format!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col xs={24} md={16}>
            <div>
              {" "}
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Divider />
              <div>
                Đã có tài khoản?<Link to={"/login"}> Đăng nhập ngay</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default RegisterPage;
