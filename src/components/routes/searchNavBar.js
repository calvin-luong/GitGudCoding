import React, { Component } from "react";
import axios from "axios";
import VideoList from "./videoList";
import $ from "jquery";

class searchNavBar extends Component {
  state = {
    result: [],
  };
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch() {
    var input = $("#searchInput").val();
    var self = this;
    self.setState((state) => ({
      result: [],
    }));
    axios({
      method: "GET",
      url: "/api/youtube/search?query=" + input + "&resultsSize=" + 10,
    })
      .then(function (response) {
        console.log(response);
        var result = [];

        for (let i = 0; i < 10; i++) {
          result.push({
            id: response.data.searchResults[i].id.videoId,
          });
        }
        self.setState((state) => ({
          result: result,
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  GitGudCoders
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/discussion">
                  Discussion
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/search">
                  Search
                </a>
              </li>
            </ul>
          </div>
          <input type="text" placeholder="Search" id="searchInput" />
          <button type="submit" onClick={this.onSearch}>
            Submit
          </button>
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Logout
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <VideoList result={this.state.result}></VideoList>
        <div>
          <h1>Coding Tutorials</h1>
        </div>
        <div>
          <h1>Coding Questions</h1>
        </div>
      </div>
    );
  }
}

export default searchNavBar;
