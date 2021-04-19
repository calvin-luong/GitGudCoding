import React, { Component } from "react";
import NavBar from "./routes/navbar";

class landing extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div
          class="d-flex justify-content-center"
          style={{
            backgroundColor: "rgba(86,61,124,.15)",
            border: "1px solid rgba(86,61,124,.15)",
            height: 500,
            alignItems: "center",
          }}
        >
          <div class="p-2 bd-highlight">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src="..." alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="p-2 bd-highlight">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src="..." alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="p-2 bd-highlight">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src="..." alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default landing;
