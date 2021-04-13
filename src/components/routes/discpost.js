import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const DiscPost = () => {
  return (
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
        </div>
  );
};

export default DiscPost;
