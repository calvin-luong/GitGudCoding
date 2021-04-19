import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";

class video extends Component {
  state = {};

  render() {
    const urlString = "https://www.youtube.com/embed/" + this.props.urlInput;

    return (
      <iframe
        width="560"
        height="315"
        src={urlString}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    );
  }
}

export default video;
