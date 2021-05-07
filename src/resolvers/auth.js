import axios from "axios";

/**
 * @return User authenticated information
 */
export async function getIsAuthenticated() {
  const auth = await axios({
    method: "GET",
    url: "/api/auth/check",
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.request.resopnse;
    });
  return auth;
}
