import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Charge from "../pages/auth/Charge";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Repositories from "../pages/user/Repositories";
import User from "../pages/user/User";
import { login, logout } from "../store/auth/thunks";

const App = () => {
  const { auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const githubUser = localStorage.getItem("username");

  useEffect(() => {
    // const check = () => {
    //   if (!githubUser) return dispatch(logout());
    //   const username = localStorage.getItem("username");
    //   const password = sessionStorage.getItem("password");
    //   dispatch(login({ username, password }));
    // };
    // check();
  }, []);

  if (auth === "pending") {
    return <Charge />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {auth === "authenticated" ? (
          <>
            {/* <Route path="/" element={<Carga />} /> */}
            <Route path="/" element={<Repositories />} />
            <Route path="/profile" element={<User />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
