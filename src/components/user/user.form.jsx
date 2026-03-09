import { Button, Input } from "antd";
import React from "react";
import axios from "axios";

const UserForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const hanldeClickBtn = () => {
    const URL_BACKEND = "http://localhost:8080/api/v1/user";
    const data = { fullName, email, password, phone: phoneNumber };
    axios.post(URL_BACKEND, data);
    console.log("check data: ", { fullName, email, password, phoneNumber });
  };
  return (
    <div
      className="user-form"
      style={{ margin: "20px auto", maxWidth: "600px" }}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>FullName</span>
          <Input
            placeholder="FullName"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Phone Number</span>
          <Input
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div>
          <Button
            type="primary"
            onClick={() => {
              hanldeClickBtn();
            }}
          >
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
