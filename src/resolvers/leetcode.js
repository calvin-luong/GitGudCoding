import axios from "axios";

/**
 * Returns all Leetcode Problems
 */
export async function getAllLeetcode() {
  const user = await axios({
    method: "GET",
    url: "/api/leetcode/questions/all",
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}
/**
 * NOTE THIS IS THE TITLE-SLUG ATTRIBUTE
 * @param {String} title of the question you want
 */
export async function getLeetcodeQuestion(title) {
  const user = await axios({
    method: "GET",
    url: "/api/leetcode/questions/" + title,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}

/**
 * NOTE THIS IS THE TITLE-SLUG ATTRIBUTE
 * @param {String} title of the question you want
 */
export async function getLeetcodeQuestionByTopic(num, topic) {
  const allQuestions = await getAllLeetcode();
  const newQuestions = [];

  for (var i = 0; i < num; i++) {
    var questionFound = await getLeetcodeQuestion(
      allQuestions.allProblems[i].questionTitleSlug
    );

    if (
      questionFound.allProblems.topicTags.find((a) =>
        a.toLowerCase().includes(topic.toLowerCase())
      )
    ) {
      newQuestions.push(questionFound);
    }
  }
  return newQuestions;
}
