import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";

class video extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      </React.Fragment>
    );
  }
}

export default video;
