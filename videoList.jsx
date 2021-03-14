import React, { Component } from "react";
import Video from "./video";

class videoList extends Component {
  state = {
    vids: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.vids.map((vids) => (
          <Video key={vids.id} />
        ))}
      </div>
    );
  }
}

export default videoList;
