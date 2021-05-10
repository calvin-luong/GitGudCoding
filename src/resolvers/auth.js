import axios from "axios";

/**
 * @return User authenticated information
 */
export async function getIsAuthenticated() {
  const auth = await axios({
    method: "GET",
    url: "https://peaceful-dusk-16502.herokuapp.com/api/auth/check",
  });

  return auth.data.authenticated;
}
