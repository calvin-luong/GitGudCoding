import React, { Component } from "react";
import NavBar from "../app/admin/navbar";
import "../../styles/createPost.scss";
import Swal from "sweetalert2";
import axios from "axios";
import { getUserFullInfo } from "../../resolvers";

class createPostWithVideo extends Component {
  state = {
    title: "",
    titleCharLimit: 100,
    description: "",
    descriptionCharLimit: 500,
    username: [],
  };

  constructor(props) {
    super(props);
    this.getName = this.getName.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  async getName() {
    var self = this;
    const userinfo = await getUserFullInfo();

    this.setState((state) => ({
      username: userinfo,
    }));
    console.log(userinfo);
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = async (e) => {
    e.preventDefault();
    await this.getName();

    if (this.state.title.length > this.state.titleCharLimit) {
      Swal.fire({ icon: "error", text: "Title character Limit Exceeded" });
    } else if (
      this.state.description.length > this.state.descriptionCharLimit
    ) {
      Swal.fire({
        icon: "error",
        text: "Description character Limit Exceeded",
      });
    } else {
      var titleBox = document.getElementById("titleInput").value;
      var descriptionBox = document.getElementById("descriptionInput").value;

      axios({
        method: "POST",
        url: "/api/discussions/create",
        data: {
          title: titleBox,
          description: descriptionBox,
          creator: this.state.username._id,
          creatorName:
            this.state.username.first_name +
            " " +
            this.state.username.last_name,
          topics: [this.state.username.image],
        },
      }).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  render() {
    return (
      <div>
        <NavBar />

        <div class="container">
          <div class="row">
            <div class="col-md-12 col-md-offset-2">
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
                    id="titleInput"
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
                    rows="10"
                    style={{ width: "100%" }}
                    class="form-control"
                    name="description"
                    id="descriptionInput"
                    value={this.state.content}
                    onChange={this.handleOnChange}
                  >
                    {this.props.location.state.videoID}
                  </textarea>
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

export default createPostWithVideo;
