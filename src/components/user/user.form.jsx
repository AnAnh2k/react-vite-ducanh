import { Button, Input } from "antd";
import React from "react";

const UserForm = () => {
  return (
    <div
      className="user-form"
      style={{ margin: "20px auto", maxWidth: "600px" }}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>FullName</span>
          <Input placeholder="Basic usage" />
        </div>
        <div>
          <span>Email</span>
          <Input placeholder="Basic usage" />
        </div>
        <div>
          <span>Password</span>
          <Input.Password placeholder="Basic usage" />
        </div>
        <div>
          <span>Phone Number</span>
          <Input placeholder="Basic usage" />
        </div>
        <div>
          <Button type="primary">Create User</Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
