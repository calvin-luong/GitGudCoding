import React, { Component } from "react";
import NavBar from "../app/navbar";

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
            <div class="card" style={{ width: "18rem", height: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Learn Java</h5>
                <p class="card-text">
                  Java is one of the most popular programming languages to this
                  day. Java is used to develop web apps, games, mobile apps, and
                  many more.
                </p>
                <a
                  href="#"
                  class="btn btn-primary"
                  style={{ bottom: "10px", position: "absolute" }}
                >
                  Learn
                </a>
              </div>
            </div>
          </div>
          <div class="p-2 bd-highlight">
            <div
              class="card"
              style={{
                width: "18rem",
                height: "18rem",
              }}
            >
              <div class="card-body">
                <h5 class="card-title">Simple Algorithms</h5>
                <p class="card-text">
                  Learn simple sorting algorithms to help sort data.
                </p>
                <a
                  href="#"
                  class="btn btn-primary"
                  style={{ bottom: "10px", position: "absolute" }}
                >
                  Learn
                </a>
              </div>
            </div>
          </div>
          <div class="p-2 bd-highlight">
            <div class="card" style={{ width: "18rem", height: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Data Structures</h5>
                <p class="card-text">Learn how information can be stored.</p>
                <a
                  href="#"
                  class="btn btn-primary"
                  style={{ bottom: "10px", position: "absolute" }}
                >
                  Learn
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
