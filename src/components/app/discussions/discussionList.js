import React, { Component } from "react";
import DiscPost from "./discpost";

class discussionList extends Component {
  state = {};
  render() {
    return (
      <div class="wrapper">
        {this.props.result.map((id) => (
          <DiscPost id={id.id} />
        ))}
      </div>
    );
  }
}

export default discussionList;
