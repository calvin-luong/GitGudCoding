import React, { Component } from "react";

class comment extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="media mb-4" id="profile pic">
          <img
            class="d-flex mr-3 rounded-circle"
            src="http://placehold.it/50x50"
            alt=""
          />
          <div id="body">
            <h5 class="mt-0" id="Commenter Name">
              {this.props.creator}
            </h5>
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}

export default comment;
