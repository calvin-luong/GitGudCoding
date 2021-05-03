import axios from "axios";

export async function getPostyId(id) {
  const user = await axios({
    method: "GET",
    url: "/api/posts/" + id,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}
export async function getPostsByThreadId(id) {
  const user = await axios({
    method: "GET",
    url: "/api/posts/thread/" + id,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}

export async function createPost(body) {
  const user = await axios({
    method: "POST",
    url: "/api/posts/create/",
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
export async function updatePost(id, body) {
  const user = await axios({
    method: "PATCH",
    url: "/api/posts/update/" + id,
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

export async function deletePost(id) {
  const user = await axios({
    method: "DELETE",
    url: "/api/posts/delete/" + id,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}
