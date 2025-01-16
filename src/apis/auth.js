import http from "../utils/http";

export const URL_LOGIN = "/auth/login";
export const URL_REGISTER = "/auth/register";
export const URL_LOGOUT = "/auth/logout";

const authApi = {
  googleAuth() {
    return http.get(`/auth/google`);
  },

  googleAuthCallback(code) {
    return http.get(`/auth/google/callback?code=${code}`);
  },

  register(body) {
    return http.post(`${URL_REGISTER}`, body);
  },
  login(body) {
    return http.post(`${URL_LOGIN}`, body);
  },
  logout(body) {
    return http.post(`${URL_LOGOUT}`, body);
  },
};
export default authApi;
