import { clientID, clientSecret } from "../baseurl";

export const singUp = ( ) => {
  githubApi.post(
    `/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}`
  )
  .then((response) => {
    console.log("response.data", response.data);
    const token = response.data.split("&")[0].split("=")[1];
    localStorage.setItem('token', token)
    apiGithubApi
      .get("/user")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error(error);
  });
}
