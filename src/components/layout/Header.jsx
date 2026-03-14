import {
  AppstoreOutlined,
  BookOutlined,
  HomeOutlined,
  LoginOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const items = [
  {
    label: <NavLink to="/">Home</NavLink>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <NavLink to="/books">Book</NavLink>,
    key: "books",
    icon: <BookOutlined />,
    disabled: true,
  },
  {
    label: <NavLink to="/users">User</NavLink>,
    key: "users",
    icon: <UserOutlined />,
  },
  {
    label: "Setting",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        label: <NavLink to="/login">Login</NavLink>,
        key: "setting:1",
        icon: <LoginOutlined />,
      },
      {
        label: <NavLink to="/register">Register</NavLink>,
        key: "setting:2",
        icon: <UserAddOutlined />,
      },
    ],
  },
];
const Header = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
