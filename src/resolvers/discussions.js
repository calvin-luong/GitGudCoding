import axios from "axios";

export async function getAllDiscussions() {
  const user = await axios({
    method: "GET",
    url: "/api/discussions/all",
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}

export async function getDiscussionById(id) {
  const user = await axios({
    method: "GET",
    url: "/api/discussions/" + id,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}
export async function getDiscussionsByTopic(topic) {
  const user = await axios({
    method: "GET",
    url: "/api/discussions/topic/" + topic,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}
export async function getDiscussionsByTitle(title) {
  const user = await axios({
    method: "GET",
    url: "/api/discussions/title/" + title,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}
export async function createDiscussion(body) {
  const user = await axios({
    method: "POST",
    url: "/api/discussions/create/",
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
export async function updateDiscussion(id, body) {
  const user = await axios({
    method: "PATCH",
    url: "/api/discussions/update/" + id,
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

export async function deleteDiscussion(id) {
  const user = await axios({
    method: "DELETE",
    url: "/api/discussions/delete/" + id,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.response;
    });
  return user;
}
