import React, { Component } from "react";
import axios from "axios";
import VideoList from "./videoList";
import $ from "jquery";
import NavBar from "./navbar";

class searchVid extends Component {
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
      url:
        "/api/youtube/search?query=" +
        input +
        "-programming-tutorial" +
        "&resultsSize=" +
        12,
    })
      .then(function (response) {
        console.log(response);
        var result = [];

        for (let i = 0; i < 12; i++) {
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
        <NavBar />
        <h1>Videos</h1>
        <div
          class="input-group"
          style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
        >
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            id="searchInput"
          />
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={this.onSearch}
          >
            Search
          </button>
        </div>
        <VideoList result={this.state.result}></VideoList>
      </div>
    );
  }
}

export default searchVid;
