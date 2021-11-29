import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.jikan.moe/v3/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    return Promise.reject(err);
  }
);

export default instance;
