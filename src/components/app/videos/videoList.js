import React, { Component } from "react";
import Video from "./video";
import "../../../styles/videoList.scss";

class videoList extends Component {
  render() {
    return (
      <div className="videoListContainer">
        <div class="row">
          {this.props.result.map((vids) => (
            <div class="column">
              <Video urlInput={vids.id} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default videoList;
