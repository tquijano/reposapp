import axios from "axios";

const apiGithubApi = axios.create({
  baseURL: 'https://api.github.com',
});

apiGithubApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `token ${localStorage.getItem("token")}`,
};
return config;
});

export default apiGithubApi;