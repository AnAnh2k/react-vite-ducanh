import React, { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllBooksAPI } from "../services/api.service";
import BookTable from "../components/book/book.table";
import BookForm from "../components/book/book.form";

const BookPage = () => {
  const [dataBooks, setDataBooks] = useState([]);

  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadBook();
  }, [current, pageSize]);

  const loadBook = async () => {
    const res = await fetchAllBooksAPI(current, pageSize);
    if (res.data) {
      setDataBooks(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
  };

  return (
    <>
      <div style={{ margin: "20px", marginBottom: "60px" }}>
        <BookForm loadBook={loadBook} />
        <BookTable
          dataBooks={dataBooks}
          loadBook={loadBook}
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

export default BookPage;
