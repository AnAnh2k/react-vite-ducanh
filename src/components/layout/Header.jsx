import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/users"}>User</NavLink>
      </li>
      <li>
        <NavLink to={"/books"}>Book</NavLink>
      </li>
    </ul>
  );
};

export default Header;
