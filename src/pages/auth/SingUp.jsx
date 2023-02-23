import React from "react";
import useForm from "../../hooks/useForm";
import { singUp } from "../../utilities/auth/singUp";
import { clientID } from "../../utilities/baseurl";

const formInitialState = { username: "", password: "", githubUser: "" };

const Login = () => {
  const { inputs, handleInputChange } = useForm(formInitialState);

  const verifySingUp = (e) => {
    e.preventDefault();
    singUp(inputs);
    console.log("inputs", inputs);
  };

  console.log("clientID", clientID);

  const githubSingUP = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=user`;
  };
  return (
    // <form onSubmit={verifySingUp}>
    //   <input type="text" name="username" onChange={handleInputChange} />
    //   <input type="text" name="githubUser" onChange={handleInputChange} />
    //   <input type="password" name="password" onChange={handleInputChange} />
    //   <input type="submit" value="Enviar " />
    // </form>
    <>
      <button onClick={githubSingUP}>Registrate con GitHub</button>
    </>
  );
};

export default Login;
