import React, { Component } from "react";
import NavBar from "../app/admin/navbar";
import axios from "axios";
import DiscussionList from "../app/posts/discussionList";
import moment from "moment";
import { getDiscussionsByTitle } from "../../resolvers";
import image from "../../../src/resources/monke.jpeg";

class discussion extends Component {
  state = {
    result: [],
    searchedResult: [],
    searched: false,
  };

  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    var self = this;

    axios({ method: "GET", url: "/api/discussions/all" })
      .then(function (response) {
        var ids = [];

        for (let i = response.data.length - 1; i >= 0; i--) {
          var date = new Date(response.data[i].create_date);

          ids.push({
            id: response.data[i]._id,
            title: response.data[i].title,
            description: response.data[i].description,
            creator: response.data[i].creatorName,
            image: response.data[i].topics[0],
            createdAt: String(date).split("GMT")[0],
          });
        }
        console.log(ids);

        self.setState((state) => ({
          result: ids,
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleOnSubmit = async (e) => {
    var self = this;
    e.preventDefault();
    self.state.searched = true;

    var searchField = document.getElementById("search").value;
    console.log(searchField);

    if (searchField.length == 0) {
      self.state.searched = false;
    } else {
      const searched = await getDiscussionsByTitle(searchField);

      this.setState((state) => ({
        searchedResult: searched,
      }));

      for (let i = self.state.searchedResult.length - 1; i >= 0; i--) {
        self.state.result.push({
          id: self.state.searchedResult[i]._id,
          title: self.state.searchedResult[i].title,
          description: self.state.searchedResult[i].description,
          creator: self.state.searchedResult[i].creatorName,
          createdAt: moment(
            new Date(
              self.state.searchedResult[i].createdAt.substring(0, 4),
              self.state.searchedResult[i].createdAt.substring(5, 7) - 1,
              self.state.searchedResult[i].createdAt.substring(8, 10)
            )
          ).format("MMMM D, Y"),
          image: self.state.searchedResult[i].topics[0],
        });
      }
    }
    self.forceUpdate();
  };

  emptyArray() {
    this.state.result = [];
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
              <form onSubmit={this.handleOnSubmit}>
                <input
                  type="text"
                  id="search"
                  class="form-control form-control-sm bg-gray-200 border-gray-200 shadow-none mb-2 mt-2"
                  placeholder="Search"
                />
              </form>
            </span>
          </div>
          <div class="wrapper">
            <DiscussionList result={this.state.result}></DiscussionList>
            {this.emptyArray()}
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
