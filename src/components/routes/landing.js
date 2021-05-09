import React, { Component } from "react";
import NavBar from "../app/admin/navbar";
import axios from "axios";
import DiscussionList from "../app/posts/discussionList";
import moment from "moment";
import image from "../../../src/resources/monke.jpeg";

class landing extends Component {
  state = {
    result: [],
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
  }
  isEmpty() {
    if (this.state.result == 0) {
      return (
        <div>
          <img src="https://emoji.gg/assets/emoji/3600_kermit_sips_tea.gif"></img>
          <h1>No discussions so far</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div class="container mt-4">
          <div class="wrapper">
            <div style={{ marginLeft: "30%" }}>{this.isEmpty()}</div>
            <DiscussionList result={this.state.result}></DiscussionList>
          </div>
        </div>
      </div>
    );
  }
}

export default landing;
