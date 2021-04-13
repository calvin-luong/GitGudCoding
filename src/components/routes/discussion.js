import React, { Component } from "react";
import NavBar from "./navbar";
import DiscPost from "./discpost";

class discussion extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div class="container mt-4">
          <div class="inner-header">
            <button type="button" class="btn btn-outline-secondary bg-gray-200 border-gray-200 shadow-none" href="#">Create a Post</button>
            <select class="custom-select custom-select-sm w-auto mr-1 float-right">
              <option selected="">Latest</option>
              <option value="1">Popular</option>
              <option value="3">Solved</option>
              <option value="3">Unsolved</option>
              <option value="3">No Replies Yet</option>
            </select>
            <span class="input-icon input-icon-sm ml-auto w-auto">
              <input type="text" class="form-control form-control-sm bg-gray-200 border-gray-200 shadow-none mb-2 mt-2" placeholder="Search" />
            </span>
          </div>
          <div class="wrapper">
            <DiscPost></DiscPost>
          </div>
          <ul class="pagination pagination-sm pagination-circle justify-content-center mb-0">
            <li class="page-item disabled">
              <span class="page-link has-icon"><i class="material-icons">prev</i></span>
            </li>
            <li class="page-item active"><span class="page-link">1</span></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link has-icon" href="#"><i class="material-icons">next</i></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default discussion;
