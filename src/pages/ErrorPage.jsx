import { useRouteError, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Button, Result } from "antd";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Result
      status="403"
      title="Oops!"
      subTitle={error?.statusText || error?.message}
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  );
}
