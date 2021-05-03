import axios from "axios";

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
