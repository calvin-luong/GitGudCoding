import React, { Component } from "react";
import { Button } from "react-bootstrap";
import NavBar from "./navbar";

class discussion extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;
        <Button style={{ backgroundColor: "gray" }}>Create a Post</Button>
        &nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="Search" id="searchInput" />
        &nbsp;&nbsp;&nbsp;
        <Button
          style={{
            borderColor: "black",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Search
        </Button>
      </div>
    );
  }
}

export default discussion;
