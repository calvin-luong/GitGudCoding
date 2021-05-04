import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class DiscPost extends Component {
  render() {
    return (
      <div class="inner-main-body p-2">
        <div class="card mb-2">
          <div class="card-body p-sm-3">
            <div class="media forum-item">
              <a href="#" data-toggle="collapse" data-target=".forum-content">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  class="mr-3 rounded-circle"
                  width="50"
                  alt="User"
                />
              </a>
              <div class="media-body">
                <h6>
                  <Link
                    to={{
                      pathname: `/post/${this.props.id}`,
                      state: {
                        id: this.props.id,
                        title: this.props.title,
                        description: this.props.description,
                        creator: this.props.creator,
                        createdAt: this.props.createdAt,
                      },
                    }}
                  >
                    {this.props.title}
                  </Link>
                </h6>
                <p class="text-secondary">{this.props.description}</p>
              </div>
              <div class="float-right">
                <p class="text-muted">
                  <a href="#">{this.props.creator}</a> {"posted "}
                  <span class="text-secondary font-weight-bold">
                    {this.props.createdAt}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DiscPost);
