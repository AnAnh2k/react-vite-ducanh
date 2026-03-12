import React, { useEffect, useState } from "react";
import UserTable from "../components/user/user.table";
import UserForm from "../components/user/user.form";
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([
    {
      _id: "1",
      fullName: "John Doe",
      email: "john.doe@example.com",
    },
    {
      _id: "2",
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
    },
  ]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    setDataUsers(res.data);
  };

  return (
    <>
      <UserForm loadUser={loadUser} />
      <UserTable dataUsers={dataUsers} />
    </>
  );
};

export default UserPage;
