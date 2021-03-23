import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

var result = [];

const NavBar = () => {

  return (
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
        <button type="submit" onClick={function()  {   
          var input = document.getElementById("searchInput").value;
          console.log(input);

          // axios.get('/api/youtube/search', {
          //   resultsSize: 3,
          //   query: "pokemon"
          // })
          axios({
            method: 'get', 
            url: '/api/youtube/search', 
            data:{
              resultsSize: 3,
              query: "pokemon"
            }})
          .then(function (response) {
            console.log(response.data);
            for (let i = 0; i < 3; i++)
            {
              result[i] = response.data.items[i].id.videoId;
            }
          })
          .catch(function (error) {
            console.log(error);
          });}}>
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
  );
};

export default NavBar;
