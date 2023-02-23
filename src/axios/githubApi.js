import axios from "axios";

const githubApi = axios.create({
  baseURL: 'https://github.com',
});

// githubApi.interceptors.request.use((config) => {
//   config.headers = {
//     ...config.headers,
//     Authorization: `token ${localStorage.getItem("token")}`,
// };
// return config;
// });

export default githubApi;