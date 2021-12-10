import axios from "axios";

const CancelToken = axios.CancelToken;
let cancel;

const instance = axios.create({
  baseURL: "https://api.jikan.moe/v3/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    if (cancel) {
      cancel(); // cancel request
    }

    config.cancelToken = new CancelToken(function executor(c) {
      cancel = c;
    });

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    return Promise.reject(err);
  }
);

export default instance;
