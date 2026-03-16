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
import { useContext, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const Header = () => {
  const [current, setCurrent] = useState("");

  const { user } = useContext(AuthContext);

  console.log("user ", user);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

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
    },
    {
      label: <NavLink to="/users">User</NavLink>,
      key: "users",
      icon: <UserAddOutlined />,
    },

    ...(!user.id
      ? [
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
        ]
      : [
          {
            label: `Welcome: ${user?.fullName}`,
            key: "account",
            icon: <UserOutlined />,
            children: [
              {
                label: (
                  <NavLink
                    onClick={() => {
                      localStorage.removeItem("access_token");
                      window.location.reload();
                      Navigate("/login");
                    }}
                  >
                    Logout
                  </NavLink>
                ),
                key: "logout",
                icon: <LoginOutlined />,
              },
            ],
          },
        ]),
  ];
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
