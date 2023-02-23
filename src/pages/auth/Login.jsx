import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { login } from "../../utilities/auth/login";
import { clientID, clientSecret } from "../../utilities/baseurl";
import axios from "axios";
import githubApi from "../../axios/githubApi";
import apiGithubApi from "../../axios/apiGithubApi";

const formInitialState = { username: "", password: "" };

const Login = () => {
  const { inputs, handleInputChange } = useForm(formInitialState);

  const dispatch = useDispatch();

  const verifyLogin = (e) => {
    e.preventDefault();
    dispatch(login(inputs));
    console.log("inputs", inputs);
  };
  const [query] = useSearchParams();
  const githubLogin = () => {
    console.log("params", query.get("code"));
    const code = query.get("code");
    if (code) {
      githubApi
        .post(
          `/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}`
        )
        .then((response) => {
          console.log("response.data", response.data);
          const token = response.data.split("&")[0].split("=")[1];
          localStorage.setItem("token", token);
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
  };
  return (
    <>
      {/* <form onSubmit={verifyLogin}>
        <input type="text" name="username" onChange={handleInputChange} />
        <input type="password" name="password" onChange={handleInputChange} />
        <input type="submit" value="Submit" />
      </form> */}

      <Link to={"/singup"}>
        <button>Go to login</button>
      </Link>
      <button onClick={githubLogin}>Login with Github</button>
    </>
  );
};

export default Login;
