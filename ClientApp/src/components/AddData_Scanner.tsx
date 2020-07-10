import React, { useState } from "react";
import { Button } from "reactstrap";

const AddData = () => {
  const [Title, setTitle] = useState<string>("");
  const [ReleaseDate, setReleaseDate] = useState<string>("");
  const [Genre, setGenre] = useState<string>("");
  const [Price, setPrice] = useState<number>(50);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    fetch("scanner/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Title, ReleaseDate, Genre, Price }),
    })
      .then(() => {
        alert("ADDED");
      })
      .catch((error) => console.error("Unable to add item.", error));
  };

  return (
    <>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="input-field col s12">
            <input
              id="Title"
              type="text"
              className="validate"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label htmlFor="Title">Title</label>
          </div>
          <div className="input-field col s12">
            <input
              id="ReleaseDate"
              type="date"
              className="validate"
              onChange={(e) => {
                setReleaseDate(e.target.value);
              }}
            />
            <label htmlFor="ReleaseDate">Release Date</label>
          </div>
          <div className="input-field col s12">
            <input
              id="Genre"
              type="text"
              className="validate"
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            />
            <label htmlFor="Genre">Genre</label>
          </div>
          <div className="input-field col s12">
            <input id="Price" type="number" className="validate" />
            <label htmlFor="Price">Price</label>
          </div>
          <Button onSubmit={handleSubmit}>Submit</Button>
        </form>
      </div>
    </>
  );
};

export default AddData;
