import apiGithubApi from "../../axios/apiGithubApi";
import githubApi from "../../axios/githubApi";
import { clientID, clientSecret } from "../baseurl";

export const githubLogin = async () =>{
  const code = localStorage.getItem('code') 
  try {
    const response = await githubApi.post(
      `/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}`
    );
    const token = response.data.split("&")[0].split("=")[1];
    localStorage.setItem("token", token);
    if (token === "bad_verification_code") {
      ToastAlert.fire({
        icon: "error",
        title: "Your user has expired, log in again.",
      });
    } else {
      const { data } = await apiGithubApi.get("/user");
      localStorage.setItem("img", data.avatar_url);
      localStorage.setItem("githubUser", data.login);
    }
  } catch (error) {
    console.error(error);
  }
}