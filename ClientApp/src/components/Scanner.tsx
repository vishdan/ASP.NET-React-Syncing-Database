import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Scanner = () => {
  const data = useData();
  return (
    <>
      <h1>Scanner</h1>
      <Button tag={Link} to="/add">
        Add Data to Scanner (DB1)
      </Button>{" "}
      <br />
      <Button
        tag={Link}
        color="primary"
        to={{ pathname: "/view", state: { data: data } }}
      >
        View Scanner Data (DB1)
      </Button>
    </>
  );
};

export default Scanner;

const useData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function getData() {
      const response = await (await fetch("scanner")).json();
      setData(response);
    })();
  }, []);
  return data;
};
