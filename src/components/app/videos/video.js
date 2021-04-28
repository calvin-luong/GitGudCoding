
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class video extends Component {
   state = {};

  constructor(props) {
    super(props);
    this.discussVid = this.discussVid.bind(this);
  }

  discussVid() {
    this.props.history.push("/create-post-video", {
      videoID: "https://www.youtube.com/embed/" + this.props.urlInput,
    });
  }

  render() {
    const urlString = "https://www.youtube.com/embed/" + this.props.urlInput;

    return (
      <div>
        <iframe
          width="100%"
          height="100%"
          src={urlString}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <br></br>
        <a
          role="button"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          class="btn btn-outline-primary"
          onClick={this.discussVid}
        >
          Create Discussion
        </a>
      </div>
    );
  }
}

export default withRouter(video);
