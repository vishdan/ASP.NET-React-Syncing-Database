import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";

export default function Platform() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await (await fetch("platform")).json();
      setData(response);
    }
    getData();
  }, []);

  return (
    <>
      <h1>Platform</h1>
      <Button
        tag={Link}
        color="primary"
        to={{ pathname: "/view", state: { data: data } }}
      >
        View Platform Data (DB1)
      </Button>
    </>
  );
}
