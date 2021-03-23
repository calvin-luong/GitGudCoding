import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";

class video extends Component {
  state = {
  };

  render() {
    const urlString = "https://www.youtube.com/watch?v=" + this.props.urlInput;

    return (

      <React.Fragment>
        <ReactPlayer url={urlString} />
      </React.Fragment>
    );
  }
}

export default video;
