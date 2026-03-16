import { Button, Checkbox, Form, Input, notification } from "antd";
import React from "react";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";

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
      <Form
        form={form}
        name="basic"
        layout="vertical"
        style={{
          maxWidth: 600,
          margin: "0 auto",
          marginTop: "50px",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1>Register a User</h1>
        <br />
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
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

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RegisterPage;
