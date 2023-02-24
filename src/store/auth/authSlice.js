import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "./thunks";

const githubUser = localStorage.getItem("githubUser")
const initialState = { 
  auth: githubUser ? 'authenticated': 'unauthenticated', //not-auth, pending
  user: '',
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder.addCase(login.fulfilled, ( state ) => {
      state.auth = 'authenticated';
    })
    builder.addCase(login.pending, ( state ) => {
      state.auth = 'pending';
    })
    builder.addCase(login.rejected, ( state ) => {
      state.auth = 'unauthenticated';
    })
    builder.addCase(logout.fulfilled, ( state ) => {
      state.auth = 'unauthenticated';
    })
    builder.addCase(logout.rejected, ( state ) => {
      state.auth = 'unauthenticated';
    })
  },
});

// export const {  } = authSlice.actions
export default authSlice.reducer;
