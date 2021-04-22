import React from 'react';

const NavBar = () => {
   return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
         <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav mr-auto">
               <li class="nav-item active">
                  <a class="nav-link" href="/">
                     GitGudCoders
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/discussion">
                     Discussion
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/searchVid">
                     Videos
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/searchQuestion">
                     Coding Questions
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/searchTutorial">
                     Coding Tutorials
                  </a>
               </li>
            </ul>
         </div>
         <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
               <li class="nav-item">
                  <a class="nav-link" href="/login">
                     Sign In
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
