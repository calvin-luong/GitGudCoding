import axios from "axios";

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
