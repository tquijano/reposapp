import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import SingUp from "../pages/auth/SingUp";
import Profile from "../pages/user/Profile";
import Repositories from "../pages/user/Repositories";

const App = () => {
  const { auth } = useSelector((state) => state.auth);

  if (auth === "pending") {
    return <h1>Cargando</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {auth === "authenticated" ? (
          <>
            <Route path="/" element={<Repositories />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/singup" element={<SingUp />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
