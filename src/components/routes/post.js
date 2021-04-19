import React, { Component } from "react";
import NavBar from "./navbar";

class post extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar></NavBar>

        <body>
          <div class="container">
            {/* 
            Post 
            */}
            <div class="row">
              <div class="col-lg-8">
                <h1 class="mt-4">Post Title</h1>
                <p class="lead">
                  by
                  <a href="#"> Start Bootstrap</a>
                </p>

                <hr />

                <p>Posted on January 1, 2019 at 12:00 PM</p>

                <hr />

                <p class="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe
                  quibusdam sit excepturi nam quia corporis eligendi eos magni
                  recusandae laborum minus inventore?
                </p>

                <hr />

                <div class="card my-4">
                  <h5 class="card-header">Leave a Comment:</h5>

                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <textarea class="form-control" rows="3"></textarea>
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* 
            Comment Section 
            */}
            <div class="media mb-4">
              <img
                class="d-flex mr-3 rounded-circle"
                src="http://placehold.it/50x50"
                alt=""
              />

              {/* 
                Comment Section 
              */}
              <div class="media-body">
                <h5 class="mt-0">Commenter Name</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default post;
