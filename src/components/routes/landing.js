import React, { Component } from "react";
import NavBar from "../app/admin/navbar";
import axios from "axios";
import DiscussionList from "../app/posts/discussionList";
import VideoList from "../app/videos/videoList";

class landing extends Component {
  state = {
    result: [],
    video: [],
  };

  componentDidMount() {
    var self = this;

    axios({ method: "GET", url: "/api/users/self/discussions" })
      .then(function (response) {
        var ids = [];

        for (let i = response.data.length - 1; i >= 0; i--) {
          var date = new Date(response.data[i].create_date);
          ids.push({
            id: response.data[i]._id,
            title: response.data[i].title,
            description: response.data[i].description,
            creator: response.data[i].creatorName,
            createdAt: String(date).split("GMT")[0],
            image: response.data[i].topics[0],
          });
        }

        self.setState({ ...self.state, result: ids });
      })
      .catch(function (error) {
        console.log(error);
      });
    axios({
      method: "GET",
      url:
        "/api/youtube/search?query=" +
        "programming-tutorial" +
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
        self.setState({ ...self.state, video: result });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  isEmpty() {
    if (this.state.result == 0) {
      return (
        <div>
          <div style={{ textAlign: "center" }}>
            <img src="https://emoji.gg/assets/emoji/3600_kermit_sips_tea.gif"></img>
            {
              <h4 style={{ paddingTop: "20px" }}>
                You have no posts or discussions but heres some reccomended
                videos
              </h4>
            }{" "}
          </div>
          <VideoList result={this.state.video}></VideoList>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          {<h4 style={{ paddingTop: "20px" }}>Your posts</h4>}{" "}
        </div>
      );
    }
  }
  isNotEmpty() {
    if (this.state.result !== 0) {
      return <VideoList result={this.state.video}></VideoList>;
    }
  }
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div>{this.isEmpty()}</div>
        <div class="container mt-4">
          <div class="wrapper">
            <DiscussionList result={this.state.result}></DiscussionList>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          {<h4 style={{ paddingTop: "20px" }}>Suggested videos</h4>}{" "}
        </div>
        <div>{this.isNotEmpty()}</div>
      </div>
    );
  }
}

export default landing;
