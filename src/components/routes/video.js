import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";

class video extends Component {
  state = {
    urlInput : "eIrMbAQSU34",
  };

  render() {
    const urlString = "https://www.youtube.com/watch?v=" + this.state.urlInput;

    return (

      <React.Fragment>
        <ReactPlayer url={urlString} />
      </React.Fragment>
    );
  }
}

export default video;
