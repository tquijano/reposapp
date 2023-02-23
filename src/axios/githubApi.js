import axios from "axios";

const githubApi = axios.create({
  baseURL: 'https://github.com',
  mode: 'no-cors',
  // withCredentials: true,
});

githubApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    // 'Access-Control-Allow-Credentials': true,
    // 'Access-Control-Allow-Origin':'*',
    // 'Access-Control-Allow-Headers':'Origin, Authorization, X-Requested-With, Content-Type, Accept',
    // 'Access-Control-Allow-Methods':'GET, POST, PUT, PATCH, OPTIONS, DELETE'
    // Authorization: `token ${localStorage.getItem("token")}`,
};
return config;
});

export default githubApi;