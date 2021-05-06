import React, { Component } from "react";
import NavBar from "../app/admin/navbar";
import DiscPost from "../app/posts/discpost";
import axios from "axios";
import DiscussionList from "../app/posts/discussionList";
import moment from "moment";

class discussion extends Component {
  state = {
    result: [],
  };

  constructor(props) {
    super(props);
    this.pullData = this.pullData.bind(this);
  }

  pullData() {
    var self = this;

    axios({ method: "GET", url: "/api/discussions/all" })
      .then(function (response) {
        var ids = [];

        for (let i = 0; i < response.data.length; i++) {
          ids.push({
            id: response.data[i]._id,
            title: response.data[i].title,
            description: response.data[i].description,
            creator: response.data[i].creator,
            createdAt: moment(
              new Date(
                response.data[i].createdAt.substring(0, 4),
                response.data[i].createdAt.substring(5, 7) - 1,
                response.data[i].createdAt.substring(8, 10)
              )
            ).format("MMMM D, Y"),
            image: response.data[i].topics[0],
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

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div class="container mt-4">
          <div class="inner-header">
            <a
              role="button"
              class="btn btn-outline-secondary bg-gray-200 border-gray-200 shadow-none"
              href="/create-post"
            >
              Create a Post
            </a>
            <select class="custom-select custom-select-sm w-auto mr-1 float-right">
              <option selected="">Latest</option>
              <option value="1">Popular</option>
              <option value="3">Solved</option>
              <option value="3">Unsolved</option>
              <option value="3">No Replies Yet</option>
            </select>
            <span class="input-icon input-icon-sm ml-auto w-auto">
              <input
                type="text"
                class="form-control form-control-sm bg-gray-200 border-gray-200 shadow-none mb-2 mt-2"
                placeholder="Search"
              />
            </span>
          </div>
          <div class="wrapper">
            {this.pullData()}
            <DiscussionList result={this.state.result}></DiscussionList>
          </div>
          <ul class="pagination pagination-sm pagination-circle justify-content-center mb-0">
            <li class="page-item disabled">
              <span class="page-link has-icon">
                <i class="material-icons">prev</i>
              </span>
            </li>
            <li class="page-item active">
              <span class="page-link">1</span>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link has-icon" href="#">
                <i class="material-icons">next</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default discussion;
