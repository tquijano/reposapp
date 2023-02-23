import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { login } from "../../utilities/auth/login";

const formInitialState = { username: "", password: "" };

const Login = () => {
  const { inputs, handleInputChange } = useForm(formInitialState);

  const dispatch = useDispatch();

  const verifyLogin = (e) => {
    e.preventDefault();
    dispatch(login(inputs));
    console.log("inputs", inputs);
  };
  return (
    <>
      <form onSubmit={verifyLogin}>
        <input type="text" name="username" onChange={handleInputChange} />
        <input type="password" name="password" onChange={handleInputChange} />
        <input type="submit" value="Submit" />
      </form>

      <Link to={"/singup"}>
        <button>holi</button>
      </Link>
    </>
  );
};

export default Login;
