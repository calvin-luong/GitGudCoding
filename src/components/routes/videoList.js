import React, { Component } from "react";
import Video from "./video";

class videoList extends Component {
  render() {
    return (
      <div>
        <h1>Videos</h1>
        <div style={{ overflowX: "scroll" }}>
          <table
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "gray",
            }}
          >
            {this.props.result.map((vids) => (
              <th style={{ padding: "25px", width: "300px" }}>
                <Video urlInput={vids.id} />
              </th>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default videoList;
