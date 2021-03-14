import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";

class video extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Video Title</h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        <br></br>
      </div>
    );
  }
}

export default video;
