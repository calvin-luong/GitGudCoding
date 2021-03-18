import React from "react";
import { Form } from "react-bootstrap";

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
      <form style={{ display: "flex" }}>
        <input type="text" placeholder="Search" />
        <button type="submit">Submit</button>
      </form>
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
