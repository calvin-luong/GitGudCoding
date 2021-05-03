import axios from "axios";

/**
 * @return User Full info Whos logged in
 */
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
/**
 * @param {String} id of the user you want
 * @return User whos not logged in
 */
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
/**
 * Returns all comments and posts you wrote
 */
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
/**
 * @param {String} id of the user that you want to view
 * @returns all comments and posts a user wrote
 */
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
/**
 * all discussions you created
 */
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
/**
 * @param {String} id
 * @returns discussions that a user created
 */
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
/**
 * @param {User} body attributes you want to edit about yourself
* Example {
            "google_id": "283823823237328238",
            "first_name": "Darelefefl",
            "last_name": "Winston",
            "image": null 
          }
 */
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
/**
 * delete yourself
 * must be signed in
 */
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
