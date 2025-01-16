import axios from "axios";

import { toast } from "react-toastify";
import {
  clearLs,
  getAccessTokenFromLs,
  setAccessTokenToLs,
  setProfileToLs,
  setRefreshTokenToLs,
} from "./auth";
class Http {
  instance;
  accessToken;
  refreshTokenRequest;
  constructor() {
    this.accessToken = getAccessTokenFromLs();
    this.refreshTokenRequest = null;
    this.instance = axios.create({
      withCredentials: true,
      //   baseURL: "https://koxe.onrender.com",
      //baseURL: "https://server-graduation-thesis-1.onrender.com",
      baseURL: "https://bietangi.onrender.com",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Add a request interceptor
    this.instance.interceptors.request.use(
      (config) => {
        if (!this.accessToken) {
          this.accessToken = getAccessTokenFromLs();
        }
        if (this.accessToken && config.headers) {
          config.headers.authorization = `Bearer ${this.accessToken}`;
          return config;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config;
        if (url === "/auth/login") {
          const data = response.data;
          this.accessToken = data.accessToken;
          this.refreshToken = data.refreshToken;
          setAccessTokenToLs(this.accessToken);
          setRefreshTokenToLs(this.refreshToken);
          setProfileToLs(data.user);
        } else if (url === "/auth/logout") {
          this.accessToken = "";
          this.refreshToken = "";
          clearLs();
        }
        return response;
      },
      (error) => {
        if (
          error &&
          error.response &&
          (error.response.status === 401 || error.response.status === 400)
        ) {
          const config = error?.response?.config;
          const { url } = config;
          if (
            url !== "/auth/refresh" &&
            !this.refreshTokenRequest &&
            url !== "/auth/login" &&
            url !== "/auth/register"
          ) {
            this.refreshTokenRequest = this.refreshTokenRequest
              ? this.refreshTokenRequest
              : this.handleRefreshToken().finally(() => {
                  setTimeout(() => {
                    this.refreshTokenRequest = null;
                  }, 10);
                });

            return this.refreshTokenRequest.then((access_token) => {
              // Nghia la chung ta tiep tuc goi lai request cu vua bi loi
              // i want run one time

              return this.instance({
                ...config,
                headers: {
                  ...config.headers,
                  Authorization: `Bearer ${access_token}`,
                },
              });
            });
          }
        } else {
          toast.error(error?.response?.msg || "Something went wrong", {
            autoClose: 3000,
          });
        }
        return Promise.reject(error);
      }
    );
  }
  handleRefreshToken() {
    return this.instance
      .post("/auth/refresh")
      .then((res) => {
        const { accessToken } = res.data;
        setAccessTokenToLs(accessToken);
        this.accessToken = accessToken;
        return accessToken;
      })
      .catch((error) => {
        clearLs();
        this.accessToken = "";
        toast.error(error.response.data?.msg || "Something went wrong", {
          autoClose: 3000,
        });
        throw error;
      });
  }
}
const http = new Http().instance;
export default http;
