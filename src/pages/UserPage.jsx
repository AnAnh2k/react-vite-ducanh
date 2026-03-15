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

  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadUser();
  }, [current, pageSize]);

  const loadUser = async () => {
    const res = await fetchAllUserAPI(current, pageSize);
    if (res.data) {
      setDataUsers(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
  };

  return (
    <>
      <div style={{ margin: "20px", marginBottom: "60px" }}>
        <UserForm loadUser={loadUser} />
        <UserTable
          dataUsers={dataUsers}
          loadUser={loadUser}
          current={current}
          pageSize={pageSize}
          total={total}
          setCurrent={setCurrent}
          setPageSize={setPageSize}
        />
      </div>
    </>
  );
};

export default UserPage;
