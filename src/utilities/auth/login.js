import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/login",
  async( { username, password } ,{ rejectWithValue } ) =>{
    try{
      const g = localStorage.getItem('username')
      if( g !== username){
        throw new Error('User is not authenticated')
      }

    } catch (error) {
      return rejectWithValue()
    }
  }
); 