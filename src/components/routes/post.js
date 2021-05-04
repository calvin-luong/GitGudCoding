import React, { Component } from "react";
import NavBar from "../app/admin/navbar";
import Swal from "sweetalert2";
import { getUserFullInfo, threads } from "../../resolvers";
import axios from "axios";
import Comment from "../app/posts/comment";

class post extends Component {
  state = { result: [], username: [] };

  constructor(props) {
    super(props);
    this.pullComments = this.pullComments.bind(this);
    this.getName = this.getName.bind(this);
  }

  async getName() {
    var self = this;
    const userinfo = await getUserFullInfo();

    this.setState((state) => ({
      username: userinfo,
    }));
  }

  pullComments() {
    var self = this;
    axios({
      method: "GET",
      url: "/api/threads/forum/" + this.props.location.state.id,
    })
      .then(function (response) {
        var ids = [];

        for (let i = 0; i < response.data.length; i++) {
          ids.push({
            creator: response.data[i].creator,
            text: response.data[i].text,
          });
        }

        self.setState((state) => ({
          result: ids,
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async submitComment() {
    var self = this;

    var self = this;
    await getName();
    console.log(this.state.username);

    var comment = document.getElementById("comment").value;

    if (comment == 0) {
      Swal.fire({ icon: "error", text: "Comment field is empty" });
    } else {
      axios({
        method: "POST",
        url: "/api/threads/create",
        data: {
          forumId: this.props.location.state.id,
          creator: this.props.location.creator,
          text: comment,
        },
      }).then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error.request.response);
        }
      );
    }
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <body>
          <div class="container">
            {/* 
            Post 
            */}
            <div>
              <div class="col-lg-8">
                <h1 class="mt-4">{this.props.location.state.title}</h1>
                <p class="lead">
                  by
                  <a href="#"> {this.props.location.state.creator}</a>
                </p>

                <hr />

                <p>Posted on {this.props.location.state.createdAt}</p>

                <hr />

                <p class="lead">{this.props.location.state.description}</p>

                <hr />

                <div class="card my-4">
                  <h5 class="card-header">Leave a Comment:</h5>

                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          rows="3"
                          id="comment"
                        ></textarea>
                      </div>
                      <a
                        role="button"
                        class="btn btn-primary"
                        onClick={this.submitComment}
                      >
                        Submit
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {this.pullComments()}
            {this.state.result.map((commentInfo) => (
              <Comment creator={commentInfo.creator} text={commentInfo.text} />
            ))}
          </div>
        </body>
      </div>
    );
  }
}

export default post;
