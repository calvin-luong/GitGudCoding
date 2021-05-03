import axios from "axios";
/**
 * @param {String} id of the Post you want
 */
export async function getPostById(id) {
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
/**
 * @param {String} id of the Thread that you want all the comments for
 */
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
/**
 * 
 * @param {Post} body 
 * threadId = Id of the thread someone commented on 
 * creator = the persons id of who is writing this
 * Must Be Signed In
 * Example: {
                "threadId":"608df97fbbbfb9d7b4a81680", 
                "creator":"6076a02675e7cf6b5a10afd5",
                "text":"Hi hihihihojjojoododojssos"
          }
 */
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
/**
 *
 * @param {String} id for the post you want to edit
 * @param {Post} body 
 * threadId = Id of the thread someone commented on 
 * creator = the persons id of who is writing this
 * Must Be Signed In
 * Example: {
                "threadId":"608df97fbbbfb9d7b4a81680", 
                "creator":"6076a02675e7cf6b5a10afd5",
                "text":"Hi hihihihojjojoododojssos"
          }
 */
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
/**
 *
 * @param {String} id for the post you want to delete
 */
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
