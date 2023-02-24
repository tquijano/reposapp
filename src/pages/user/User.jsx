import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Navbar from "../../organisms/Navbar";

const User = () => {
  const username = localStorage.getItem("username");
  const githubUser = localStorage.getItem("githubUser");
  const img = localStorage.getItem("img");
  return (
    <>
      <Navbar />
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar sx={{ width: 100, height: 100 }} src={img} />
          </Grid>
          <Grid item>
            <Typography variant="h4">{username || "User Name"}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Github User : {githubUser}
            </Typography>
            <Typography variant="body1">Short profile description</Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Profile Information
          </Typography>
          <Typography variant="body1">
            relevant information from the user's profile
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default User;
