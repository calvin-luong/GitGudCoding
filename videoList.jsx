import React, { Component } from "react";
import Video from "./video";

class videoList extends Component {
  state = {
    vids: [
      { id: 1, value: "dsadasdsa" },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        <h1>Videos</h1>
        <table
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "gray",
          }}
        >
          {this.state.vids.map((vids) => (
            <th style={{ padding: "50px" }}>
              <Video key={vids.id} />
            </th>
          ))}
        </table>
      </div>
    );
  }
}

export default videoList;
