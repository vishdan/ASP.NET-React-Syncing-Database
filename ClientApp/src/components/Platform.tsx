import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";

export default function Platform() {
  const [data, setData] = useState([]);
  const [file, setFile] = useState<Blob | null>(new Blob());
  useEffect(() => {
    async function getData() {
      const response = await (await fetch("platform")).json();
      setData(response);
    }
    getData();
  }, []);

  const submit = async () => {
    // console.log(file)
    const url = "platform/upload";
    var filedata = new FormData();
    try{
      await filedata.append("file", file!, 'a.txt');
    }
    catch{
      console.log("cannot")
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: filedata
    });
  };

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
      <input type="file" onChange={(e) => setFile(e.target.files![0])}></input>
      <Button onClick={submit}>Upload </Button>
    </>
  );
}
