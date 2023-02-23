import React from "react";
import useForm from "../../hooks/useForm";
import { singUp } from "../../utilities/auth/singUp";

const formInitialState = { username: "", password: "", githubUser: "" };

const Login = () => {
  const { inputs, handleInputChange } = useForm(formInitialState);

  const verifySingUp = (e) => {
    e.preventDefault();
    singUp(inputs);
    console.log("inputs", inputs);
  };
  return (
    <form onSubmit={verifySingUp}>
      <input type="text" name="username" onChange={handleInputChange} />
      <input type="text" name="githubUser" onChange={handleInputChange} />
      <input type="password" name="password" onChange={handleInputChange} />
      <input type="submit" value="Enviar " />
    </form>
  );
};

export default Login;
