import React, { Component } from "react";
import NavBar from "../app/admin/navbar";
import axios from "axios";
import DiscussionList from "../app/posts/discussionList";
import moment from "moment";

class landing extends Component {
  state = {
    result: [],
  };

  pullData() {
    var self = this;

    axios({ method: "GET", url: "/api/users/self/discussions" })
      .then(function (response) {
        var ids = [];

        for (let i = response.data.length - 1; i >= 0; i--) {
          ids.push({
            id: response.data[i]._id,
            title: response.data[i].title,
            description: response.data[i].description,
            creator: response.data[i].creatorName,
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
          <div class="wrapper">
            {this.pullData()}
            <DiscussionList result={this.state.result}></DiscussionList>
          </div>
        </div>
      </div>
    );
  }
}

export default landing;
