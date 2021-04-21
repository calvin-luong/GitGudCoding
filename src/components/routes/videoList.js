import React, { Component } from "react";
import Video from "./video";
import "../../styles/grid.scss";

class videoList extends Component {
  render() {
    return (
      <div class="video">
        <div class="wrapper">
          {this.props.result.map((vids) => (
            <div
              style={{ marginLeft: "auto", marginRight: "auto", padding: "2%" }}
            >
              <Video urlInput={vids.id} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default videoList;
