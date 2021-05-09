import axios from "axios";
/**
 * @param {String} id of the thread you want
 */
export async function getThreadById(id) {
  const user = await axios({
    method: "GET",
    url: "/api/threads/" + id,
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
 * @param {String} id of the forum you want to get the threads for
 */
export async function getThreadsByForumId(id) {
  const user = await axios({
    method: "GET",
    url: "/api/threads/forum/" + id,
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
 * @param {String} id of the user you want to get threads for
 */
export async function getThreadsByUserId(id) {
  const user = await axios({
    method: "GET",
    url: "/api/threads/user/" + id,
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
 * @param {Thread} body of the thread you want to create
 * forumId is forum of the thread you are writing to
 * creator is your id
 * Example: {
                "forumId":"608df97fbbbfb9d7b4a81680",
                "creator":"6076a02675e7cf6b5a10afd5",
                "text":"Hi hihihihojjojoododojssos"
          }
 */
export async function createThread(body) {
  const user = await axios({
    method: "POST",
    url: "/api/threads/create/",
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
 * @param {Thread} body of the thread you want to edit
 * @param {id} id of the thread you want to edit
 * forumId is forum of the thread you are writing to
 * creator is your id
 * Example: {
                "forumId":"608df97fbbbfb9d7b4a81680",
                "creator":"6076a02675e7cf6b5a10afd5",
                "text":"Hi hihihihojjojoododojssos"
          }
 */
export async function updateThread(id, body) {
  const user = await axios({
    method: "PATCH",
    url: "/api/threads/update/" + id,
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
 * @param {Thread} id of the thread you want to delete
 */
export async function deleteThread(id) {
  const user = await axios({
    method: "DELETE",
    url: "/api/threads/delete/" + id,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}
