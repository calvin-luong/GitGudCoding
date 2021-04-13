import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const DiscPost = () => {
  return (
    <div class="container mt-4">
      <div class="wrapper">
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
        <div class="inner-main-body p-2">
          <div class="card mb-2">
            <div class="card-body p-sm-3">
              <div class="media forum-item">
                <a href="#" data-toggle="collapse" data-target=".forum-content"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="mr-3 rounded-circle" width="50" alt="User" /></a>
                <div class="media-body">
                  <h6><a href="#" data-toggle="collapse" data-target=".forum-content" class="text-body">Trees</a></h6>
                  <p class="text-secondary">
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                  </p>
                </div>
                <div class="float-right">
                  <p class="text-muted"><a href="#">Daniel</a> posted <span class="text-secondary font-weight-bold">25 minutes ago</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-2">
            <div class="card-body p-sm-3">
              <div class="media forum-item">
                <a href="#" data-toggle="collapse" data-target=".forum-content"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="mr-3 rounded-circle" width="50" alt="User" /></a>
                <div class="media-body">
                  <h6><a href="#" data-toggle="collapse" data-target=".forum-content" class="text-body">Linked List</a></h6>
                  <p class="text-secondary">
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                  </p>
                </div>
                <div class="float-right">
                  <p class="text-muted"><a href="#">Alexis</a> posted <span class="text-secondary font-weight-bold">1 hours ago</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-2">
            <div class="card-body p-sm-3">
              <div class="media forum-item">
                <a href="#" data-toggle="collapse" data-target=".forum-content"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="mr-3 rounded-circle" width="50" alt="User" /></a>
                <div class="media-body">
                  <h6><a href="#" data-toggle="collapse" data-target=".forum-content" class="text-body">Arrays</a></h6>
                  <p class="text-secondary">
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                  </p>
                </div>
                <div class="float-right">
                  <p class="text-muted"><a href="#">Adham</a> posted <span class="text-secondary font-weight-bold">2 hours ago</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-2">
            <div class="card-body p-sm-3">
              <div class="media forum-item">
                <a href="#" data-toggle="collapse" data-target=".forum-content"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" class="mr-3 rounded-circle" width="50" alt="User" /></a>
                <div class="media-body">
                  <h6><a href="#" data-toggle="collapse" data-target=".forum-content" class="text-body">Sort Algorithms</a></h6>
                  <p class="text-secondary">
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                  </p>
                </div>
                <div class="float-right">
                  <p class="text-muted"><a href="#">Arlan</a> posted <span class="text-secondary font-weight-bold">5 hours ago</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-2">
            <div class="card-body p-sm-3">
              <div class="media forum-item">
                <a href="#" data-toggle="collapse" data-target=".forum-content"><img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="mr-3 rounded-circle" width="50" alt="User" /></a>
                <div class="media-body">
                  <h6><a href="#" data-toggle="collapse" data-target=".forum-content" class="text-body">Tries</a></h6>
                  <p class="text-secondary">
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                  </p>
                </div>
                <div class="float-right">
                  <p class="text-muted"><a href="#">Ayman</a> posted <span class="text-secondary font-weight-bold">7 hours ago</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-2">
            <div class="card-body p-sm-3">
              <div class="media forum-item">
                <a href="#" data-toggle="collapse" data-target=".forum-content"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="mr-3 rounded-circle" width="50" alt="User" /></a>
                <div class="media-body">
                  <h6><a href="#" data-toggle="collapse" data-target=".forum-content" class="text-body">Search Algorithms</a></h6>
                  <p class="text-secondary">
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                  </p>
                </div>
                <div class="float-right">
                  <p class="text-muted"><a href="#">Antonio</a> posted <span class="text-secondary font-weight-bold">11 hours ago</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-2">
            <div class="card-body p-sm-3">
              <div class="media forum-item">
                <a href="#" data-toggle="collapse" data-target=".forum-content"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="mr-3 rounded-circle" width="50" alt="User" /></a>
                <div class="media-body">
                  <h6><a href="#" data-toggle="collapse" data-target=".forum-content" class="text-body">Graphs</a></h6>
                  <p class="text-secondary">
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                  </p>
                </div>
                <div class="float-right">
                  <p class="text-muted"><a href="#">boopy</a> posted <span class="text-secondary font-weight-bold">18 hours ago</span></p>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default DiscPost;
