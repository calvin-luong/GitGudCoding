import axios from "axios";
/**
 * Returns All Discussions in Database
 */
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
/**
 * @param {String} id of a Discussion
 * Discussion
 */
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
/**
 * @param {String} topic for the discussion you are looking for
 */
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
/**
 * @param {String} title  for the discussion you are looking for
 */
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
/**
 * 
 * @param {Discussion} body 
 * Must Be Signed In
 * Example: {
            "title": "Title1",
            "description": "Description1",
            "topics": ["Test"]
          }
 */
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
/**
 *
 * @param {String} id for the discussion you want to edit
 * @param {Discussion} body pass in the new discussion
 * Example: {
            "title": "Title1",
            "description": "Description1",
            "topics": ["Test"]
          }
 */
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
/**
 * @param {String} id for the discussion you want to delete
 */
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
