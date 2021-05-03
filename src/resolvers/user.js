import axios from "axios";

export async function getUserFullInfo() {
  const user = await axios({
    method: "GET",
    url: "/api/users/self",
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}

export async function getSomeOtherUserFullInfo(id) {
  const user = await axios({
    method: "GET",
    url: "/api/users/" + id,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}

export async function getUserPostsAndComments() {
  const user = await axios({
    method: "GET",
    url: "/api/users/self/comments",
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}
export async function getSomerOtherUserPostsAndComments(id) {
  const user = await axios({
    method: "GET",
    url: "/api/users/comments/" + id,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}
export async function getUserDiscussions() {
  const user = await axios({
    method: "GET",
    url: "/api/users/self/discussions",
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}
export async function getSomerOtherUserDiscussions(id) {
  const user = await axios({
    method: "GET",
    url: "/api/users/discussions/" + id,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}
export async function editUser(body) {
  const user = await axios({
    method: "PATCH",
    url: "/api/users/update/",
    data: body,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}
export async function deleteUser() {
  const user = await axios({
    method: "DELETE",
    url: "/api/users/delete/",
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}
