import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../app/admin/navbar";
import "../../styles/searchQuestions.scss";
import "../../resolvers";
import { getLeetcodeQuestionByTopic } from "../../resolvers";
import $ from "jquery";

const SearchQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [toggleTable, setToggleTable] = useState(false);
  const [showSpinner, toggleSpinner] = useState(false);
  const numberOfResults = 20;
  const leetcodeUrl = "https://leetcode.com/problems/";

  function createLink(titleSlug) {
    return leetcodeUrl + titleSlug;
  }

  function translateDifficulty(difficulty) {
    if (difficulty === "Easy") return 0;
    if (difficulty === "Medium") return 1;
    if (difficulty === "Hard") return 2;
  }

  function sortTitle() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("leetcodeTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 2; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  function sortDifficulty() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("leetcodeTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 2; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        if (
          Number(translateDifficulty(x.innerHTML)) >
          Number(translateDifficulty(y.innerHTML))
        ) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  function sortLikes() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("leetcodeTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 2; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[2];
        y = rows[i + 1].getElementsByTagName("TD")[2];
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  function sortDislikes() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("leetcodeTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 2; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[3];
        y = rows[i + 1].getElementsByTagName("TD")[3];
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  function renderTable() {
    console.log(questions);
    return (
      <>
        {questions.map((item, index) => (
          <tr key={index}>
            <td>
              <a
                href={createLink(item.allProblems.questionTitleSlug)}
                id="title"
              >
                {item.allProblems.title}
              </a>
            </td>
            <td id="difficulty">{item.allProblems.difficulty}</td>
            <td id="likes">{item.allProblems.likes}</td>
            <td id="dislikes">{item.allProblems.dislikes}</td>
          </tr>
        ))}
      </>
    );
  }

  async function onSearch() {
    toggleSpinner(true);
    var input = $("#searchInput").val();
    var response = [];

    try {
      response = await getLeetcodeQuestionByTopic(numberOfResults, input);
    } catch (e) {
      console.log("error!");
    }

    if (response) {
      toggleSpinner(false);
      setQuestions(response);
      setToggleTable(true);
    }
  }

  return (
    <>
      <NavBar />
      {showSpinner && (
        <div className="spinnerContainer">
          <div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!showSpinner && (
        <Container fluid="md">
          <div class="search-bar">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Topic name"
              aria-label="Search"
              aria-describedby="search-addon"
              id="searchInput"
            />
            <button
              type="button"
              class="btn btn-outline-primary"
              onClick={onSearch}
            >
              search
            </button>
          </div>

          <table
            id="leetcodeTable"
            class="table table-striped"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th onClick={sortTitle}>Title</th>
                <th onClick={sortDifficulty}>Difficulty</th>
                <th onClick={sortLikes}>Likes</th>
                <th onClick={sortDislikes}>Dislikes</th>
              </tr>
            </thead>
            <tbody>{toggleTable && renderTable()}</tbody>
            <tfoot>
              <tr>
                <th>Title</th>
                <th>Difficulty</th>
                <th>Likes</th>
                <th>Dislikes</th>
              </tr>
            </tfoot>
          </table>
        </Container>
      )}
    </>
  );
};

export default SearchQuestions;
