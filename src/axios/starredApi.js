import axios from "axios";

const starredApi = axios.create({
  baseURL: 'https://api.github.com',
  mode: 'no-cors',
});

starredApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    Accept: 'application/vnd.github.v3+json',
};
return config;
});

export default starredApi;