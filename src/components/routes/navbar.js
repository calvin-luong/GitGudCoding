import React, { Component } from "react";
import axios from "axios";
import Video from "./video";

class navbar extends Component {
  state = { 
    result: [{id:"eIrMbAQSU34", value: 0},
    {id:"RRubcjpTkks", value:0},
    {id:"grEKMHGYyns", value:0}],
   }
  render() { 
    const self = this.state;
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  GitGudCoders
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="//codeply.com">
                  Discussion
                </a>
              </li>
            </ul>
          </div>
            <input type="text" placeholder="Search" id="searchInput" />
            <button type="submit" onClick={function() {   
              var input = document.getElementById("searchInput").value;
              console.log(input);

              axios({
                method: 'GET', 
                url: '/api/youtube/search?query=' + input + "&resultsSize=" + 5
              })
              .then(function (response) {
                console.log(response.data);
                for (let i = 0; i < 3; i++)
                {
                  self.result.push({id: response.data[i].id.videoId});
                }              
              })
              .catch(function (error) {
                console.log(error);
              });
              
              console.log(self.result);

              }}>
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

        <h1>Videos</h1>
        <table
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "gray",
          }}
        >
          {this.state.result.map((result) => (
            <th style={{ padding: "50px" }}>
              <Video key={result.id} />
            </th>
          ))}
        </table>
      </div>
    );
  }
}
 
export default navbar;
