import {
  AppstoreOutlined,
  BookOutlined,
  HomeOutlined,
  LoginOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, message } from "antd";
import { useContext, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { logoutAPI } from "../../services/api.service";

const Header = () => {
  const [current, setCurrent] = useState("");

  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log("user ", user);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const hanldeLogout = async () => {
    const res = await logoutAPI();
    if (res.data) {
      localStorage.removeItem("access_token");
      setUser({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: "",
      });
      message.success("Logout user successfully");
      navigate("/");
    }
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
                  <span
                    onClick={() => {
                      hanldeLogout();
                    }}
                  >
                    Logout
                  </span>
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
