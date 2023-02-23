import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../utilities/auth/login";

const initialState = { 
  auth: 'unauthenticated', //not-auth, pending
  username: '',
  githubUser: '',
}


export const logout = createAsyncThunk(
  "auth/logout",
  async () => {
    localStorage.clear()
  }
)

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
