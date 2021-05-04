import React, { Component } from "react";
import DiscPost from "./discpost";

class discussionList extends Component {
  state = {};
  render() {
    return (
      <div class="wrapper">
        {this.props.result.map((postInfo) => (
          <DiscPost
            id={postInfo.id}
            title={postInfo.title}
            description={postInfo.description}
            creator={postInfo.creator}
            createdAt={postInfo.createdAt}
          />
        ))}
      </div>
    );
  }
}

export default discussionList;
