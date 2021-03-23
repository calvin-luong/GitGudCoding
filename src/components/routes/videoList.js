import React, { Component } from "react";
import Video from "./video";

class videoList extends Component {
  state = {
    vids: this.props.input,
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
              <Video urlInput={vids.id} />
            </th>
          ))}
        </table>
      </div>
    );
  }
}

export default videoList;
