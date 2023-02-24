import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToastAlert } from "../../utilities/toastAlert";
import { clientID } from "../../utilities/baseurl"
import { githubLogin } from "../../utilities/auth/login";

export const login = createAsyncThunk(
  "auth/login",
  async( { username, password } ,{ rejectWithValue } ) =>{
    const admittedUser = localStorage.getItem('username')
    const admittedPassword = sessionStorage.getItem('password')
    if ( admittedUser === null ){
      ToastAlert.fire({
        icon: 'error',
        title: "you don't have an account created with that user"
      })
      return rejectWithValue()
    }
    else if ( (username == admittedUser ) && (password === admittedPassword ) ){
      await githubLogin()
      return { username : username}
    }else{
      return rejectWithValue()
    }
  }
); 

export const logout = createAsyncThunk(
  "auth/logout",
  async () => {
    localStorage.clear()
    sessionStorage.clear()
  }
)