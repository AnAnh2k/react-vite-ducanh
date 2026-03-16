import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Navigate } from "react-router-dom";
import { notification } from "antd";

const PrivateRoute = (props) => {
  const { user } = useContext(AuthContext);
  if (user && user.id) {
    return <>{props.children}</>;
  } else {
    notification.error({
      message: "Unauthorized",
      description: "You need to login to access this page",
    });
    return <Navigate to="/login" />;
  }
};
export default PrivateRoute;
