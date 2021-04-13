import React, { Component } from "react";
import NavBar from "./navbar";
import DiscPost from "./discpost";

class discussion extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <DiscPost></DiscPost>
      </div>
    );
  }
}

export default discussion;
