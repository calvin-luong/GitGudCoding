import React, { Component } from "react";
import NavBar from "./navbar";
import "../../styles/createPost.scss";
import Swal from "sweetalert2";

class createPost extends Component {
  state = {
    title: "",
    titleCharLimit: 100,
    description: "",
    descriptionCharLimit: 500,
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.length > this.state.titleCharLimit) {
      Swal.fire({ icon: "error", text: "Title character Limit Exceeded" });
    } else if (
      this.state.description.length > this.state.descriptionCharLimit
    ) {
      Swal.fire({
        icon: "error",
        text: "Description character Limit Exceeded",
      });
    }
  };

  render() {
    return (
      <div>
        <NavBar />

        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <h1>Create post</h1>

              <form action="" method="POST" onSubmit={this.handleOnSubmit}>
                <div class="form-group">
                  <label for="title">
                    Title <span class="require">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="title"
                    value={this.state.content}
                    onChange={this.handleOnChange}
                  />
                  <small>
                    Remaining Characters:{" "}
                    {this.state.titleCharLimit - this.state.title.length}
                  </small>
                </div>

                <div class="form-group">
                  <label for="description">
                    Description <span class="require">*</span>
                  </label>
                  <textarea
                    rows="5"
                    class="form-control"
                    name="description"
                    value={this.state.content}
                    onChange={this.handleOnChange}
                  ></textarea>
                  <small>
                    Remaining Characters:{" "}
                    {this.state.descriptionCharLimit -
                      this.state.description.length}
                  </small>
                </div>

                <div class="form-group">
                  <p>
                    <span class="require">*</span> - required fields
                  </p>
                </div>

                <div class="form-group">
                  <button type="submit" class="btn btn-primary">
                    Create
                  </button>

                  <a role="button" class="btn btn-default" href="/discussion">
                    Cancel
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default createPost;
