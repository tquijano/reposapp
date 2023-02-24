import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { signUp } from "../../utilities/auth/signUp";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import Typography from "@mui/material/Typography";
import ChangeAuth from "../../molecules/changeAuth/ChangeAuth";

const SignUP = () => {
  const [sendForm, setSendForm] = useState(false);

  const formInitialState = { username: "", password: "", confirmPassword: "" };

  const validations = {
    username: (value) => {
      if (value.trim().length === 0) {
        return "username cannot be empty";
      } else if (value.length < 4) {
        return "The name must have at least 4 characters";
      }
    },
    password: (value) => {
      if (value.trim().length === 0) {
        return "password cannot be empty";
      } else if (value.length < 5) {
        return "Password must have at least 5 characters";
      } else if (/\d/.test(value) === false) {
        return "Password must have at least one number";
      }
    },
    confirmPassword: (value) => {
      if (value.trim().length === 0) {
        return "confirm password cannot be empty";
      } else if (value !== inputs.password) {
        return "passwords do not match";
      }
    },
  };

  const {
    inputs,
    validForm,
    handleInputChange,
    usernameValid,
    passwordValid,
    confirmPasswordValid,
  } = useForm(formInitialState, validations);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendForm(true);
    validForm && signUp(inputs);
  };

  return (
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
        elevation={3}
        sx={{
          p: 4,
          width: "350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <PersonAddOutlinedIcon
            sx={{ fontSize: "48px", mb: 2, color: "primary.main" }}
          />
          <Typography
            component="h1"
            variant="h5"
            sx={{ mb: 2, fontWeight: "bold" }}
          >
            Sign up
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            mt: 1,
            "& > :not(style)": { mt: 1 },
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
            helperText={usernameValid}
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
            helperText={passwordValid}
          />
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            fullWidth
            type="password"
            onChange={handleInputChange}
            error={sendForm && !!confirmPasswordValid}
            helperText={confirmPasswordValid}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Sign up
          </Button>
        </Box>
        <ChangeAuth title="Sign In" text="Already have an account?" link="" />
      </Paper>
    </Box>
  );
};

export default SignUP;
