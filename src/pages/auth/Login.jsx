import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import Typography from "@mui/material/Typography";
import ChangeAuth from "../../molecules/changeAuth/ChangeAuth";
import { login } from "../../store/auth/thunks";
const Login = () => {
  const [sendForm, setSendForm] = useState(false);

  const formInitialState = { username: "", password: "" };

  const validations = {
    username: (value) => {
      if (value.trim().length === 0) {
        return "username cannot be empty";
      }
    },
    password: (value) => {
      if (value.trim().length === 0) {
        return "password cannot be empty";
      }
    },
  };

  const { inputs, handleInputChange, validForm, usernameValid, passwordValid } =
    useForm(formInitialState, validations);

  const dispatch = useDispatch();

  const [query] = useSearchParams();

  useEffect(() => {
    const code = query.get("code");
    if (code) {
      localStorage.setItem("code", code);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendForm(true);
    validForm && dispatch(login(inputs));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "98vh",
          background:
            "radial-gradient(circle, rgba(174,233,238,1) 0%, rgba(148,187,233,1) 100%)",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            width: "350px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <LockOutlinedIcon
              sx={{ fontSize: "48px", mb: 2, color: "primary.main" }}
            />
            <Typography
              component="h1"
              variant="h5"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Sign in
            </Typography>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              mt: 1,
              "& > :not(style)": { mt: 2 },
            }}
          >
            <TextField
              name="username"
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={handleInputChange}
              error={sendForm && !!usernameValid}
              helperText={sendForm && usernameValid}
            />
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              margin="normal"
              fullWidth
              type="password"
              onChange={handleInputChange}
              error={sendForm && !!passwordValid}
              helperText={sendForm && passwordValid}
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Sign in
            </Button>
          </Box>
          <ChangeAuth
            title="Sign Up"
            text=" Don't have an account?"
            link="signup"
          />
        </Paper>
      </Box>
    </>
  );
};

export default Login;
