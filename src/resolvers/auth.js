import axios from "axios";

/**
 * @return User authenticated information
 */
export async function getIsAuthenticated() {
  const auth = await axios({
    method: "GET",
    url: "/api/auth/check",
  });

  return auth.data.authenticated;
}
