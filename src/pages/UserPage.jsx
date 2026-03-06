import React from "react";
import UserTable from "../components/user/user.table";
import UserForm from "../components/user/user.form";

const UserPage = () => {
  return (
    <>
      <UserForm />
      <UserTable />
    </>
  );
};

export default UserPage;
