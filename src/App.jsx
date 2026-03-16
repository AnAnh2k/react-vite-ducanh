import "./components/todo/todo.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";
import { Spin } from "antd";
import { getAccountAPI } from "./services/api.service";
import { use, useContext, useEffect } from "react";
import { AuthContext } from "./components/context/auth.context";

const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const delay = (miniSeconds) =>
    new Promise((resolve, reject) => setTimeout(resolve, miniSeconds));

  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    await delay(1500);
    if (res.data) {
      setUser(res.data.user);
    }
    setIsAppLoading(false);
  };

  return (
    <>
      {isAppLoading == true ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
