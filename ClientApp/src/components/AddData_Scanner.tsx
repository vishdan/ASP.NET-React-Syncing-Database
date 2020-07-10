import React, { Component } from "react";
import { Button } from "reactstrap";

export default class AddData extends Component {
  constructor(props: any) {
    super(props);
    this.state = {Title: "", ReleaseDate: "", Genre: "", Price: 50 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

 handleSubmit = (e:any) => {
    e.preventDefault();
    fetch("scanner/add", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .catch(error => console.error('Unable to add item.', error));
	alert("ADDED")
  };

  render() {
    return (
      <>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="input-field col s12">
              <input id="Title" type="text" className="validate" onChange={this.handleChange}/>
              <label htmlFor="Title">Title</label>
            </div>
            <div className="input-field col s12">
              <input id="ReleaseDate" type="date" className="validate" onChange={this.handleChange}
              />
              <label htmlFor="ReleaseDate">Release Date</label>
            </div>
            <div className="input-field col s12">
              <input id="Genre" type="text" className="validate" onChange={this.handleChange}/>
              <label htmlFor="Genre">Genre</label>
            </div>
            <div className="input-field col s12">
              <input id="Price" type="number" className="validate"/>
              <label htmlFor="Price">Price</label>
            </div>
            <Button onSubmit={this.handleSubmit} >Submit</Button>
          </form>
        </div>
      </>
    );
  }
}
